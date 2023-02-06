import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import MainNavigator from "./main";
import { navigationRef } from "./utils";
import useTheme from '@hooks/use-theme';
import StartupContainer from '@containers/startup-container';


const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { darkMode } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-600">
      <NavigationContainer
        theme={darkMode ? DarkTheme : DefaultTheme}
        ref={navigationRef}
      >
        <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
