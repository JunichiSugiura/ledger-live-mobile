/* @flow */
import React, { Component } from "react";
import { translate } from "react-i18next";
import { View, StyleSheet } from "react-native";
import type { T } from "../../types/common";
import LText from "../../components/LText";
import colors from "../../colors";
import LedgerLogoRec from "../../icons/LedgerLogoRec";

class PoweredByLedger extends Component<{
  t: T,
}> {
  render() {
    const { t } = this.props;
    return (
      <View style={styles.container}>
        <LText style={styles.textStyle}>{t("common.poweredBy")}</LText>
        <View style={styles.iconStyle}>
          <LedgerLogoRec height={17} width={68} color={colors.darkBlue} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  textStyle: {
    opacity: 0.3,
    justifyContent: "center",
    color: colors.darkBlue,
  },
  iconStyle: {
    marginLeft: 5,
    alignSelf: "flex-end",
  },
});

export default translate()(PoweredByLedger);
