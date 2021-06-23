// @flow
import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import LText from "./LText";

type Props = {
  article: ArticleDoc,
  last: ?boolean,
};

export default function Article({ article, last = false }: Props) {
  const onClick = useCallback(() => {
    console.log("clicked");
  }, []);

  const isToday = useCallback(date => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }, []);

  const timeDiff = Date.now() - article.publishedTime.getTime();
  const whenText = isToday(article.publishedTime)
    ? "Today"
    : Math.ceil(timeDiff / (24 * 60 * 60 * 1000)) + " days ago";

  return (
    <TouchableWithoutFeedback onClick={onClick}>
      <View style={[styles.container, !last ? styles.devider : undefined]}>
        <View style={styles.imageCotainer}>
          <Image source={{ uri: article.imageUrl }} style={styles.image} />
        </View>

        <View style={styles.detailsContainer}>
          <LText bold style={styles.publisherText}>
            Cointelegraph
          </LText>
          <LText bold style={styles.titleText}>
            {article.title}
          </LText>
          <LText style={styles.descText}>{article.description}</LText>
          <LText style={styles.whenText}>{whenText}</LText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export type ArticleDoc = {
  guid: string,
  title: string,
  imageUrl: string,
  description: string,
  author: string,
  url: string,
  publishedTime: Date,
  createdTime: Date,
};

const styles = StyleSheet.create({
  container: {
    // borderRadius: 16,
    margin: 16,
    paddingBottom: 20,
  },
  image: {
    flex: 1,
    width: 366,
    height: 200,
    alignSelf: "center",
    borderRadius: 8,
    // paddingHorizontal: 16,
  },
  detailsContainer: {
    // paddingHorizontal: 8,
  },
  publisherText: {
    fontSize: 16,
    paddingTop: 16,
  },
  titleText: {
    fontSize: 30,
    paddingVertical: 8,
  },
  descText: {
    paddingVertical: 8,
  },
  devider: {
    borderBottomWidth: 2,
    borderColor: "#DDD",
  },
  whenText: {
    fontWeight: "600",
    color: "#777",
    fontSize: 12,
  },
});
