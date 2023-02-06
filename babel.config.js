const presets = ["module:metro-react-native-babel-preset"];
const plugins = [];

plugins.push(
  [
    "module-resolver",
    {
      root: ["./src"],
      extensions: [".js", ".json"],
      alias: {
        "@": "./src/*",
        "@store": "./src/store/",
        "@services": "./src/services/",
        "@config": "./src/config/",
        "@core": "./src/core/",
        "@components": "./src/components/",
        "@containers": "./src/containers/",
        "@assets": "./src/assets/",
        "@store": "./src/store/",
        "@hooks": "./src/hooks/",
        "@navigators": "./src/navigators/",
        "@theme": "./src/theme/",
      },
    },
  ],
  "react-native-reanimated/plugin"
);
plugins.push("nativewind/babel");

module.exports = (api) => {
  api.cache(true);
  return {
    presets,
    plugins,
  };
};
