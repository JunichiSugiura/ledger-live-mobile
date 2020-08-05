// @flow

import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { createAction } from "@ledgerhq/live-common/lib/hw/actions/app";
import connectApp from "@ledgerhq/live-common/lib/hw/connectApp";
import { TrackScreen } from "../../analytics";
import colors from "../../colors";
import { ScreenName } from "../../const";
import { connectingStep, currencyApp } from "../../components/DeviceJob/steps";
import SelectDevice from "../../components/SelectDevice";
import NavigationScrollView from "../../components/NavigationScrollView";
import DeviceActionModal from "../../components/DeviceActionModal";

const forceInset = { bottom: "always" };

const action = createAction(connectApp);

type Props = {
  navigation: any,
  route: { params: RouteParams },
};

type RouteParams = {
  currency: Currency,
};

export default function ConnectDevice({ navigation, route }: Props) {
  const [device, setDevice] = useState<?Device>();

  const onResult = useCallback(
    result => {
      setDevice();
      navigation.navigate(ScreenName.MigrateAccountsProgress, {
        currency: route.params?.currency,
        ...result,
      });
    },
    [navigation, route.params],
  );

  const onClose = useCallback(() => {
    setDevice();
  }, []);

  return (
    <SafeAreaView style={styles.root} forceInset={forceInset}>
      <TrackScreen category="MigrateAccount" name="ConnectDevice" />
      <NavigationScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}
      >
        <SelectDevice
          deviceMeta={route.params?.deviceMeta}
          onSelect={setDevice}
          autoSelectOnAdd
          steps={[connectingStep, currencyApp(route.params?.currency)]}
        />
      </NavigationScrollView>
      <DeviceActionModal
        action={action}
        device={device}
        onResult={onResult}
        onClose={onClose}
        request={{ currency: route.params.currency }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  footer: {
    padding: 4,
    borderTopWidth: 1,
    borderTopColor: colors.lightFog,
  },
});
