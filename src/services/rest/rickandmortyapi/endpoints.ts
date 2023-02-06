import { rickAndMortyApi } from ".";
import fetchCharacters from "./characters/fetch-characters";

export const exampleApi = rickAndMortyApi.injectEndpoints({
  endpoints: (build) => ({
    fetchCharacters: fetchCharacters(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchCharactersQuery } = exampleApi;
