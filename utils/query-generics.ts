export const genericMutation = <TypeResponse, TypeBody>(
  func: Function,
  body: TypeBody
): MutationResponse<TypeResponse> => {
  return func(body)
}

export const genericLazy = <TypeResponse, TypeBody>(
  func: Function
): [
  (body?: TypeBody) => Promise<{ data: TypeResponse }>,
  LazyReturnRoot<TypeResponse>
] => {
  const result = func()

  //@ts-ignore
  return Object.values(result)
}

export const genericLazyWithParams = <TypeResponse, TypeBody>(
  func: Function
): [
  (body: TypeBody) => Promise<{ data: TypeResponse }>,
  LazyReturnRoot<TypeResponse>
] => {
  const result = func()

  //@ts-ignore
  return Object.values(result)
}

type MutationResponse<TypeResponse> = {
  data: TypeResponse
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}

type LazyReturnRoot<TypeResponse> = {
  status: string
  endpointName: string
  requestId: string
  startedTimeStamp: number
  data: TypeResponse
  fulfilledTimeStamp: number
  isUninitialized: boolean
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  currentData: TypeResponse
  isFetching: boolean
}
