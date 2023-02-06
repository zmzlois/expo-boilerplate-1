import { useSelector } from "react-redux";
import { ThemeState } from "@store/theme";
import { useColorScheme } from "nativewind";

export default function () {
  // Get the scheme device
  const { colorScheme } = useColorScheme();

  // Get current theme from the store
  // const currentTheme = useSelector(
  //   (state: { theme: ThemeState }) => state.theme.theme
  // );

  // Get current theme from nativewind !!! not persistent
  const currentTheme = colorScheme;

  const isDark = useSelector(
    (state: { theme: ThemeState }) => state.theme.darkMode
  );
  const darkMode = isDark === null ? colorScheme === "dark" : isDark;

  return { darkMode, currentTheme };
}
