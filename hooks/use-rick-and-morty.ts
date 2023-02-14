import { Character } from '@services/models/character'
import { FetchCharacterBody } from '@services/rest/rickandmortyapi/characters/fetch-character'
import { FetchCharacters } from '@services/rest/rickandmortyapi/characters/fetch-characters'
import {
  fetchCharactersQuery,
  fetchLazyCharacterQuery,
  fetchLazyCharactersQuery,
} from '@services/rest/rickandmortyapi/endpoints'
import {
  genericLazy,
  genericLazyWithParams,
  genericMutation,
} from '@utils/query-generics'

export default function () {
  const useCharacters = (body: void) =>
    genericMutation<FetchCharacters, void>(fetchCharactersQuery, body)

  const useLazyCharacters = () =>
    genericLazy<FetchCharacters, void>(fetchLazyCharactersQuery)

  const useLazyCharacterDetail = () =>
    genericLazyWithParams<Character, FetchCharacterBody>(
      fetchLazyCharacterQuery
    )

  return { useCharacters, useLazyCharacters, useLazyCharacterDetail }
}
