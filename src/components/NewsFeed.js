// @flow
import React, { useState, useCallback, useEffect } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import firestore from "@react-native-firebase/firestore";
import Article from "./Article";
import type { ArticleDoc } from "./Article";
import NFT from "./NFT";
import LText from "./LText";

export default function NewsFeed() {
  const [listType, setListType] = useState<"news" | "gallery">("news");

  return (
    <ScrollView style={styles.scrollView}>
      <View style={tagStyles.container}>
        <TouchableOpacity
          onPress={() => setListType("news")}
          style={[tagStyles.tag]}
        >
          <LText semiBold style={[tagStyles.tagText]}>
            Articles
          </LText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setListType("gallery")}
          style={[tagStyles.tag]}
        >
          <LText semiBold style={[tagStyles.tagText]}>
            Gallery
          </LText>
        </TouchableOpacity>
      </View>

      {listType === "news" ? <Articles /> : <NFT />}
      <Articles />
    </ScrollView>
  );
}

const tagStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  tag: {
    backgroundColor: "#DDD",
    borderRadius: 20,
    padding: 8,
    marginRight: 8,
    paddingHorizontal: 16,
  },
  tagText: {
    color: "#000",
  },
});

function Articles() {
  const articles = useArticles();

  return (
    <>
      {articles.map((article, i) => (
        <Article
          key={article.guid}
          article={article}
          last={i === articles.length - 1}
        />
      ))}
    </>
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
