
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```



## Generate new component
Run the following command
```bash
  yarn add-component
```
Follow the steps, after you will get a component, e.g:

```typescript
import React from 'react'
import { useTheme } from '@/Hooks'
import { StyleSheet, Text, View } from 'react-native'
interface Props {}
const MyComponent: React.FC<Props> = ({}) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme()
  return (
    <View
      testID="MyComponentTestID"
      style={[
        Layout.fill,
        Layout.colCenter,
        Gutters.regularHPadding,
        Gutters.regularVPadding,
        styles.containerStyle,
        { backgroundColor: Colors.background },
      ]}
    >
      <Text style={[Fonts.textRegular, { color: Colors.text }]}>
        My component
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  containerStyle: {},
})
MyComponent.defaultProps = {}
export default MyComponent

```


## Generate new container
Run the following command
```bash
  yarn add-container
```
**NB the command will generate a new TEST FILE, TDD is reccomended**

Follow the steps, after you will get a container, e.g:


```typescript
import React from 'react'
import { useTheme } from '@/Hooks'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
const MyContainerContainer = () => {
  const { Layout, Colors, Fonts } = useTheme()
  return (
    <SafeAreaView
    testID="MyContainerTestID"
      style={[
        Layout.fill,
        Layout.colHCenter,
        styles.globalContainer,
        { backgroundColor: Colors.white },
      ]}
    >
    <Text style={[Fonts.textRegular, { color: Colors.text }]}>
      My container
    </Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  globalContainer: {}
})
export default MyContainerContainer
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

