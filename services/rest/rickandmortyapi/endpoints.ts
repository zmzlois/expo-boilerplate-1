import { rickAndMortyApi } from './index'
import fetchCharacters from './characters/fetch-characters'
import fetchCharacter from './characters/fetch-character'

export const api = rickAndMortyApi.injectEndpoints({
  endpoints: build => ({
    fetchCharacters: fetchCharacters(build),
    fetchCharacter: fetchCharacter(build),
  }),
  overrideExisting: false,
})

export const fetchCharactersQuery = api.endpoints.fetchCharacters.useQuery

export const fetchLazyCharactersQuery =
  api.endpoints.fetchCharacters.useLazyQuery

export const fetchLazyCharacterQuery = api.endpoints.fetchCharacter.useLazyQuery
