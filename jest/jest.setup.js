import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);

global.__reanimatedWorkletInit = jest.fn();

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("@reduxjs/toolkit/query/react", () => {
  return {
    __esModule: true,
    BaseQueryFn: jest.fn(() => {
      return {};
    }),
    FetchArgs: jest.fn(() => {
      return {};
    }),
    createApi: jest.fn(() => {
      return {};
    }),
    fetchBaseQuery: jest.fn(() => {
      return {};
    }),
    FetchBaseQueryError: jest.fn(() => {
      return {};
    }),
  };
});

jest.mock("@services/rest/rickandmortyapi/index", () => {
  return {
    __esModule: true,
    rickAndMortyApi: {
      injectEndpoints: jest.fn(() => {
        return {};
      }),
    },
  };
});

jest.mock("@store/index", () => {
  return {
    __esModule: true,
    persistor: {
      getState: jest.fn(() => {}),
      subscribe: jest.fn(() => {}),
    },
    store: {
      getState: jest.fn(() => {}),
      subscribe: jest.fn(() => {}),
      dispatch: jest.fn(() => {}),
    },
  };
});

// from: https://react.i18next.com/misc/testing
jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

export const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

jest.mock("@react-navigation/elements", () => {
  const actualNav = jest.requireActual("@react-navigation/elements");
  return {
    ...actualNav,
    useHeaderHeight: () => ({
      headerHeight: 20,
    }),
  };
});

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
