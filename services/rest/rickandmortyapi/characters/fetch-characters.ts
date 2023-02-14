import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Character } from '../../../models/character'
import { Info } from '../../../models/info'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<FetchCharacters, void>({
    query: () => '/character',
  })

export interface FetchCharacters {
  info: Info
  results: Character[]
}
