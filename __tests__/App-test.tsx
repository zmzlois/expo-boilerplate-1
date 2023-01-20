import React from 'react'
import { render, cleanup, act, waitFor } from '@testing-library/react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import ApplicationNavigator from '@/Navigators/Application'

import configureStore from 'redux-mock-store'

const initialState = {
  theme: {
    theme: 'default',
    darkMode: null,
  },
}
const mockStore = configureStore()
let store = mockStore(initialState)

describe('App main module', () => {
  beforeEach(() => {})
  afterEach(() => cleanup())

  it('should match the snapshot', async () => {
    await act(async () => {
      const page = await waitFor(() =>
        render(
          <Provider store={store}>
            <ApplicationNavigator />
          </Provider>,
          {
            createNodeMock: element => {
              if (element.type === PersistGate) {
                return element.props.children
              }
              return null
            },
          },
        ),
      )

      return new Promise(resolve => {
        setTimeout(() => {
          expect(page).toMatchSnapshot()
          resolve()
        }, 3000)
      })
    })
  })
})
