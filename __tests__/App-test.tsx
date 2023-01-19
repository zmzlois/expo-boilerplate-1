import React from 'react'
import { render, cleanup, act, waitFor } from '@testing-library/react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'

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
          }
        )
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
