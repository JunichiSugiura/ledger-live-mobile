// @flow
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LText from "./LText";

export default function NFT() {
  const bundles = useNFTBundles();
  const assets = bundles.reduce((assets, b) => [...assets, ...b.assets], []);
  // const assets = useNFTAssets();

  return (
    <>
      {assets.map(asset => (
        <NFTAsset key={asset.id} asset={asset} />
      ))}
    </>
  );
}

function NFTAsset({ asset }: { asset: AssetObj }) {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate("WebViewer", {
      url: asset.permalink,
    });
  }, [asset.permalink]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.assetRoot}>
        <View style={[{ backgroundColor: asset.background_color }]}>
          <Image source={{ uri: asset.image_url }} style={styles.image} />
        </View>
        <View style={styles.container}>
          <LText bold style={styles.title}>
            {asset.owner.user.username}
          </LText>
          <LText bold style={styles.name}>
            {asset.name}
          </LText>
          <LText>{}</LText>
          {asset.seller_orders?.current_price && (
            <LText>
              {asset.sell_orders.current_price * 1000000000000000000 + " ETH"}
            </LText>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

type BundleObj = any;

type AssetObj = any;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  assetRoot: {
    marginTop: 12,
  },
  image: {
    flex: 1,
    width: 366,
    height: 366,
    alignSelf: "center",
    borderRadius: 8,
    // paddingHorizontal: 16,
  },
  title: {
    fontSize: 14,
    paddingTop: 16,
    color: "#888",
  },
  name: {
    fontSize: 16,
    paddingVertical: 4,
    // color: "#888",
  },
  container: {
    paddingHorizontal: 8,
  },
});

function useNFTBundles() {
  const [bundles, setBundles] = useState<BundleObj[]>([]);
  useEffect(() => {
    fetch(`https://api.opensea.io/api/v1/bundles?limit=3&offset=0&on_sale=true`)
      .then(data => data.json())
      .then(d => setBundles(d.bundles));
  }, []);

  return bundles;
}

function useNFTAssets() {
  const [assets, setAssets] = useState<AssetsObj[]>([]);
  useEffect(() => {
    fetch(
      `https://api.opensea.io/api/v1/assets?&order_direction=desc&offset=0&limit=20`,
    )
      .then(data => data.json())
      .then(d => setAssets(d.assets));
  }, []);

  return assets;
}
