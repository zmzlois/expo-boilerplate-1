import React from 'react'
import { render, cleanup, act, waitFor } from '@testing-library/react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store } from '@/Store'
import CharactersContainer from '@/Containers/Characters/CharactersContainer'

jest.mock('@/Services/modules/rick', () => {
  return {
    __esModule: true,
    useLazyFetchCharactersQuery: jest.fn(() => [
      function fetchCharacters() {
        return jest.fn(() => ({
          info: {
            count: 826,
            pages: 42,
            next: 'https://rickandmortyapi.com/api/character/?page=2',
            prev: null,
          },
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              type: '',
              gender: 'Male',
              origin: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/1',
              },
              location: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/20',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/2',
              ],
              url: 'https://rickandmortyapi.com/api/character/1',
              created: '2017-11-04T18:48:46.250Z',
            },
          ],
        }))
      },
      {
        data: {
          info: {
            count: 826,
            pages: 42,
            next: 'https://rickandmortyapi.com/api/character/?page=2',
            prev: null,
          },
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              type: '',
              gender: 'Male',
              origin: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/1',
              },
              location: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/20',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/2',
                // ...
              ],
              url: 'https://rickandmortyapi.com/api/character/1',
              created: '2017-11-04T18:48:46.250Z',
            },
          ],
        },
        isSuccess: true,
        isLoading: false,
        error: false,
      },
      { lastArg: Symbol() },
    ]),
  }
})

describe('CharactersContainer', () => {
  beforeEach(() => {})
  afterEach(() => cleanup())

  it('match the snapshot', async () => {
    await act(async () => {
      const page = await waitFor(() =>
        render(
          <Provider store={store}>
            <CharactersContainer />
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

  it('has charactersList', async () => {
    await act(async () => {
      const page = await waitFor(() =>
        render(
          <Provider store={store}>
            <CharactersContainer />
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
          expect(page.getAllByTestId('charactersList')).not.toBeNull()
          resolve()
        }, 3000)
      })
    })
  })
})
