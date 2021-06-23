// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

type Props = {
  route: {
    params: {
      url: string,
    },
  },
};

export default function WebViewer({ route }: Props) {
  return (
    <View style={styles.root}>
      <WebView source={{ uri: route.params.url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
