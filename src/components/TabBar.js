// @flow
import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  useWindowDimensions,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { PortfolioTabIcon } from "../screens/Portfolio";
import AccountsIcon from "../icons/Accounts";
import { TransferTabIcon } from "../screens/Transfer";
import { ManagerTabIcon } from "./RootNavigator/ManagerNavigator";
import SettingsIcon from "../icons/Settings";
import NewsFeed from "./NewsFeed";
import TabIcon from "./TabIcon";
import { NavigatorName, ScreenName } from "../const";

const BAR_HEIGHT = 80;
const MIN_Y = 60;
const NAV_VISIBLE_RANGE = 100;

type Props = {
  navigation: any,
};

export default function TabBar({ navigation }: Props) {
  const [barStyle, setBarStyle] = useState<"default" | "light-content">(
    "default",
  );
  const { width, height } = useWindowDimensions();
  const initialY = height - BAR_HEIGHT;
  const y = useSharedValue(initialY);
  const shadowOpacity = useDerivedValue(() => {
    const min = initialY;
    const max = MIN_Y;
    return (y.value - min) / (max - min);
  }, []);
  const navOpacity = useDerivedValue(() => {
    const min = initialY - NAV_VISIBLE_RANGE;
    const max = initialY;
    return (y.value - min) / (max - min);
  }, []);

  const toggleBarStyle = useCallback(endY => {
    setBarStyle(endY === MIN_Y ? "light-content" : "default");
  }, []);

  const gestureHandler = useAnimatedGestureHandler(
    {
      onStart: (_, ctx) => {
        ctx.startY = y.value;
      },
      onActive: (event, ctx) => {
        y.value = ctx.startY + event.translationY;
      },
      onEnd: () => {
        const fromTop = y.value + MIN_Y;
        const toBottom = initialY - y.value;
        const towardTop = fromTop < toBottom;
        const endY = towardTop ? MIN_Y : initialY;
        y.value = withSpring(endY, {
          damping: 0, // 10
          // mass: 10, // 1
          // stiffnesss: 10, // 100
          overshootClamping: true, // false
          // restDisplacementThreshold: 1, // 0.001
        });
        runOnJS(toggleBarStyle)(endY);
      },
    },
    [toggleBarStyle],
  );

  const animatedViewStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: y.value }],
    }),
    [],
  );

  const animatedBgShadowStyle = useAnimatedStyle(
    () => ({
      opacity: shadowOpacity.value,
    }),
    [],
  );

  const animatedNavStyle = useAnimatedStyle(
    () => ({
      opacity: navOpacity.value,
    }),
    [],
  );

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <Animated.View
        pointerEvents="none"
        style={[
          styles.backgroundShadow,
          { width, height },
          animatedBgShadowStyle,
        ]}
      />

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            styles.bottomSheet,
            styles.topShadow,
            { width, height },
            animatedViewStyle,
          ]}
        >
          <Animated.View style={[styles.navigations, animatedNavStyle]}>
            <TouchableOpacity
              onPress={() => navigation.jumpTo(ScreenName.Portfolio)}
              style={styles.touchable}
            >
              <PortfolioTabIcon color={TEMP_TAB_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.jumpTo(NavigatorName.Accounts)}
              style={styles.touchable}
            >
              <TabIcon
                Icon={AccountsIcon}
                i18nKey="tabs.accounts"
                color={TEMP_TAB_COLOR}
              />
            </TouchableOpacity>
            <View style={styles.touchable}>
              <TransferTabIcon color={TEMP_TAB_COLOR} />
            </View>
            <TouchableOpacity
              onPress={() => navigation.jumpTo(NavigatorName.Manager)}
              style={styles.touchable}
            >
              <ManagerTabIcon color={TEMP_TAB_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.jumpTo(NavigatorName.Settings)}
              style={styles.touchable}
            >
              <TabIcon
                Icon={SettingsIcon}
                i18nKey="tabs.settings"
                color={TEMP_TAB_COLOR}
              />
            </TouchableOpacity>
          </Animated.View>

          <NewsFeed />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
}

const TEMP_TAB_COLOR = "#888";

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "#fff",
    borderRadius: 16,
    position: "absolute",
  },
  navigations: {
    // backgroundColor: "blue",
    height: BAR_HEIGHT,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  topShadow: {
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    elevation: 4,
  },
  backgroundShadow: {
    backgroundColor: "#000",
    position: "absolute",
  },
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
