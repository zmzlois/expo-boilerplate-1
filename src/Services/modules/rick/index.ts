import { api } from '@/Services/api'
import fetchCharacters from './fetchCharacters'

export const exampleApi = api.injectEndpoints({
  endpoints: build => ({
    fetchCharacters: fetchCharacters(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchCharactersQuery } = exampleApi
