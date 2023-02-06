import React from "react";
import { View } from "react-native";

interface Props {}

const Separator: React.FC<Props> = ({}) => {
  return <View className="flex-1 my-4 h-0.5 bg-slate-600 dark:bg-slate-50" />;
};

Separator.defaultProps = {};

export default Separator;
