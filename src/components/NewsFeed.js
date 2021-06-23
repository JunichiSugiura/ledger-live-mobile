// @flow
import React, { useState, useCallback, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import firestore from "@react-native-firebase/firestore";
import Article from "./Article";
import type { ArticleDoc } from "./Article";

export default function NewsFeed() {
  const articles = useArticles();

  return (
    <ScrollView style={styles.scrollView}>
      {articles.map((article, i) => (
        <Article
          key={article.guid}
          article={article}
          last={i === articles.length - 1}
        />
      ))}
    </ScrollView>
  );
}

function useArticles() {
  const [articles, setArticles] = useState<ArticleDoc[]>([]);

  const onQuery = useCallback(querySnapshot => {
    const data = [];
    querySnapshot.forEach(documentSnapshot => {
      const article = documentSnapshot.data();
      data.push({
        ...article,
        publishedTime: article.publishedTime.toDate(),
        createdTime: article.createdTime.toDate(),
      });
    });

    setArticles(data);
  }, []);

  const onError = useCallback(error => {
    console.error(error);
  }, []);

  useEffect(() => {
    async function subscribe() {
      const subscriber = await firestore()
        .collection("articles")
        .orderBy("publishedTime", "desc")
        .get()
        .then(onQuery, onError);
      return () => subscriber();
    }

    subscribe();
  }, [onQuery, onError]);

  return articles;
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: "red",
  },
});
