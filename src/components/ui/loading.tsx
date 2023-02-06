import React from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";

interface Props {}

const Loading: React.FC<Props> = ({}) => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center dark:bg-gray-600">
      <ActivityIndicator size={"large"} color={"#fff"} />
    </SafeAreaView>
  );
};

Loading.defaultProps = {};

export default Loading;
