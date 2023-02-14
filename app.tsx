import 'react-native-gesture-handler'

import { App as ExpoRouterApp } from 'expo-router/entry'
import { Provider } from 'react-redux'
import React from 'react'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from '@store'

const App = () => (
  <Provider store={store}>
    {/**
     * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
     * and saved to redux.
     * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
     * for example `loading={<SplashScreen />}`.
     * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
     */}
    <PersistGate loading={null} persistor={persistor}>
      <ExpoRouterApp />
    </PersistGate>
  </Provider>
)

export default App
