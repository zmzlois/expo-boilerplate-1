import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Character } from '../../../models/character'

export interface FetchCharacterBody {
  id: number
}

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<Character, FetchCharacterBody>({
    query: ({ id }) => `/character/${id}`,
  })
