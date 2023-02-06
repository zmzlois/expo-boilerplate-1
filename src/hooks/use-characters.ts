import { useLazyFetchCharactersQuery } from "@services/rest/rickandmortyapi/endpoints";
import { FetchCharacters } from "@services/rest/rickandmortyapi/characters/fetch-characters";

export default function () {
  const persitCharacters = () => {
    // do dispatch or whatever else
  };

  const saveCharacters = (data: FetchCharacters) => {
    // do dispatch or whatever else
  };

  const useLazyFetchCharacters = () => {
    return useLazyFetchCharactersQuery();
  };

  return {
    persitCharacters,
    saveCharacters,
    useLazyFetchCharacters,
  };
}
