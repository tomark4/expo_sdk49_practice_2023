import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoadead] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoadead) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoadead]);

  if (!fontsLoadead) return null;

  // @ts-ignore
  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
