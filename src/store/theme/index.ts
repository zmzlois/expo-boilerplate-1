import { createSlice } from "@reduxjs/toolkit";
import { ColorSchemeName } from "nativewind/dist/style-sheet/color-scheme";

const slice = createSlice({
  name: "theme",
  initialState: { theme: "light", darkMode: null } as ThemeState,
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }: ThemePayload) => {
      if (typeof theme !== "undefined") {
        state.theme = theme;
      }
      if (typeof darkMode !== "undefined") {
        state.darkMode = darkMode;
      }
    },
    setDefaultTheme: (
      state,
      { payload: { theme, darkMode } }: ThemePayload
    ) => {
      if (!state.theme) {
        if (typeof theme !== "undefined") {
          state.theme = theme;
        }
        if (typeof darkMode !== "undefined") {
          state.darkMode = darkMode;
        }
      }
    },
  },
});

export const { changeTheme, setDefaultTheme } = slice.actions;

export default slice.reducer;

export type ThemeState = {
  theme: ColorSchemeName;
  darkMode: boolean | null;
};

type ThemePayload = {
  payload: Partial<ThemeState>;
};
