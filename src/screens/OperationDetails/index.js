/* @flow */
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import type { Operation } from "@ledgerhq/live-common/lib/types";
import {
  getDefaultExplorerView,
  getTransactionExplorer,
} from "@ledgerhq/live-common/lib/explorers";
import { getMainAccount } from "@ledgerhq/live-common/lib/account";
import byFamiliesOperationDetails from "../../generated/operationDetails";
import { accountScreenSelector } from "../../reducers/accounts";
import { TrackScreen } from "../../analytics";
import NavigationScrollView from "../../components/NavigationScrollView";
import Footer from "./Footer";
import Content from "./Content";
import colors from "../../colors";
import Close from "../../icons/Close";
import ArrowLeft from "../../icons/ArrowLeft";

const forceInset = { bottom: "always" };

type RouteParams = {
  accountId: string,
  operation: Operation,
};

type Props = {
  navigation: any,
  route: { params: RouteParams },
};

export const BackButton = ({ navigation }: { navigation: Navigation }) => (
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.goBack()}>
    <ArrowLeft size={18} color={colors.grey} />
  </TouchableOpacity>
);

export const CloseButton = ({ navigation }: { navigation: Navigation }) => (
  <TouchableOpacity
    // $FlowFixMe
    onPress={() => navigation.popToTop()}
    style={styles.buttons}
  >
    <Close size={18} color={colors.grey} />
  </TouchableOpacity>
);

export default function OperationDetails({ route }: Props) {
  const { account, parentAccount } = useSelector(accountScreenSelector(route));
  if (!account) return null;
  const operation = route.params?.operation;
  const mainAccount = getMainAccount(account, parentAccount);
  const url = getTransactionExplorer(
    getDefaultExplorerView(mainAccount.currency),
    operation.hash
  );
  const specific = byFamiliesOperationDetails[mainAccount.currency.family];
  const urlWhatIsThis =
    specific &&
    specific.getURLWhatIsThis &&
    specific.getURLWhatIsThis(operation);

  return (
    <SafeAreaView style={styles.container} forceInset={forceInset}>
      <TrackScreen category="OperationDetails" />
      <NavigationScrollView>
        <View style={styles.root}>
          <Content
            account={account}
            parentAccount={parentAccount}
            operation={operation}
          />
        </View>
      </NavigationScrollView>
      <Footer url={url} urlWhatIsThis={urlWhatIsThis} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  root: {
    paddingTop: 24,
    paddingBottom: 64,
  },
  buttons: {
    padding: 16,
  },
});
