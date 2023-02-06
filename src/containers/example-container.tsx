import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useColorScheme } from "nativewind";
import { ColorSchemeSystem } from "nativewind/dist/style-sheet/color-scheme";
import Brand from '@components/brand';

const ExampleContainer = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const onChangeTheme = (theme?: ColorSchemeSystem) => {
    setColorScheme(theme ? theme : colorScheme === "light" ? "dark" : "light");
  };

  return (
    <ScrollView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <View className="justify-center items-center px-4">
          <Brand />
        </View>
        <Text className="text-base pb-4">DarkMode :</Text>

        <TouchableOpacity
          className={`mb-4 bg-red-500  dark:bg-slate-700 px-8 py-2 rounded-full`}
          onPress={() => onChangeTheme("system")}
        >
          <Text className="text-lg dark:text-white">Auto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`mb-4 border-2 border-red-500 px-8 py-2 rounded-full`}
          onPress={() => onChangeTheme("dark")}
        >
          <Text className="text-lg dark:text-white">Dark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`mb-4 border-2 border-red-500 px-8 py-2`}
          onPress={() => onChangeTheme("light")}
        >
          <Text className="text-lg dark:text-white">Light</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExampleContainer;
