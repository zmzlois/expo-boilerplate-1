import { useTheme } from "@hooks";
import { NativewindImages } from "@theme";
import React from "react";
import { View, Image } from "react-native";

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: "contain" | "cover" | "stretch" | "repeat" | "center";
};

const Brand = ({ height, width, mode }: Props) => {
  const Images = NativewindImages();
  const { currentTheme } = useTheme();

  return (
    <View style={{ height, width }}>
      <Image
        className="h-full w-full"
        source={Images.logo[currentTheme]}
        resizeMode={mode}
      />
    </View>
  );
};

Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: "contain",
};

export default Brand;
