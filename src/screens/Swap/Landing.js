// @flow
import React, { useCallback, useState } from "react";
import { Trans } from "react-i18next";
import SafeAreaView from "react-native-safe-area-view";
import {
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import LText from "../../components/LText";
import CheckBox from "../../components/CheckBox";
import swapIllustration from "../../images/swap.png";
import colors from "../../colors";
import { setHasAcceptedSwapKYC } from "../../actions/settings";
import { TrackScreen } from "../../analytics";
import ExternalLink from "../../icons/ExternalLink";
import { urls } from "../../config/urls";

const Landing = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const onAcceptSwapKYC = useCallback(
    () => dispatch(setHasAcceptedSwapKYC(true)),
    [dispatch],
  );

  return (
    <SafeAreaView style={styles.root}>
      <TrackScreen category="Swap" name="KYC Landing" />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <Image source={swapIllustration} style={styles.illustration} />
          <LText secondary style={styles.title}>
            <Trans i18nKey="transfer.swap.landing.title" />
          </LText>
          <LText primary style={styles.disclaimer}>
            <Trans i18nKey="transfer.swap.landing.disclaimer" />
          </LText>
          <TouchableOpacity
            style={styles.infoLinkContainer}
            onPress={() => Linking.openURL(urls.swap.info)}
          >
            <LText semiBold style={styles.infoLink}>
              <Trans i18nKey="transfer.swap.landing.whatIsSwap" />
            </LText>
            <ExternalLink size={11} color={colors.live} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableWithoutFeedback
          event="SwapTermsAcceptSwitch"
          onPress={() => setIsChecked(!isChecked)}
        >
          <View style={styles.switchRow}>
            <CheckBox isChecked={isChecked} />
            <LText semiBold style={styles.switchLabel}>
              <Trans i18nKey="transfer.swap.kyc.disclaimer" />
            </LText>
          </View>
        </TouchableWithoutFeedback>
        <Button
          event="ConfirmSwapLandingDisclaimer"
          type={"primary"}
          title={<Trans i18nKey="common.continue" />}
          disabled={!isChecked}
          onPress={onAcceptSwapKYC}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },

  footer: {
    flexDirection: "column",
    padding: 16,
    paddingTop: 0,
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.lightFog,
  },

  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  switchLabel: {
    marginLeft: 8,
    color: colors.darkBlue,
    fontSize: 13,
    lineHeight: 18,
    flex: 1,
  },

  wrapper: {
    flexGrow: 1,
    flexShrink: 0,
    marginTop: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  illustration: {
    width: 244,
    height: 131,
    marginBottom: 40,
  },

  title: {
    fontSize: 18,
    color: colors.darkBlue,
    marginBottom: 8,
  },

  disclaimer: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.smoke,
    textAlign: "center",
  },

  infoLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  infoLink: {
    fontSize: 13,
    lineHeight: 22,
    paddingVertical: 8,
    textAlign: "center",
    color: colors.live,
    marginRight: 6,
  },
});

export default Landing;
