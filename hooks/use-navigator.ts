import {
  Link as ExpoRouterLink,
  Stack,
  useRouter,
  useSearchParams as ExpoRouterUseSearchParams,
  Tabs,
} from 'expo-router'
import { Href } from 'expo-router/build/link/href'

type Router = {
  /** Navigate to the provided href. */
  push: (href: Href) => void
  /** Navigate to route without appending to the history. */
  replace: (href: Href) => void
  /** Go back in the history. */
  back: () => void
  /** Update the current route query params. */
  setParams: (params?: Record<string, string>) => void
}

const createGenericFunction = <T>(func: T): T => func

const createGenericStack = <T>(stack: T): T => stack

const createLink = () => ExpoRouterLink

export default function () {
  const createStackNavigator = () => createGenericStack(Stack)

  const createTabNavigator = () => createGenericStack(Tabs)

  const useSearchParams = createGenericFunction(ExpoRouterUseSearchParams)

  const router: Router = useRouter()

  const Link: typeof ExpoRouterLink = createLink()

  return {
    createStackNavigator,
    createTabNavigator,
    useSearchParams,
    router,
    Link,
  }
}
