import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Platform, Pressable, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useAuth } from '../../context/auth'
import { NotesProvider } from '../../context/notes'
import { useNavigator } from '../../hooks'

export const unstable_settings = {
  initialRouteName: 'index',
}

export default function AppLayout() {
  const { createStackNavigator, router } = useNavigator()
  const Stack = createStackNavigator()

  return (
    <NotesProvider>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerRight: SignOutButton,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Notes',
            headerLargeTitle: true,
            headerSearchBarOptions: {
              onChangeText: event => {
                // Update the query params to match the search query.
                router.setParams({
                  q: event.nativeEvent.text,
                })
              },
            },
          }}
        />
        <Stack.Screen
          name="compose"
          options={{
            title: 'Create a new note',
            presentation: 'modal',
            headerRight: Platform.select({
              ios: DismissComposeButton,
            }),
          }}
        />
      </Stack>
    </NotesProvider>
  )
}

function SignOutButton() {
  const { signOut } = useAuth()
  const { Link } = useNavigator()

  return (
    <Link
      href="/sign-in"
      onPress={ev => {
        ev.preventDefault()
        signOut()
      }}
      asChild
    >
      <Pressable
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          paddingRight: 8,
        }}
      >
        <Text
          style={{
            fontWeight: 'normal',
            paddingHorizontal: 8,
            fontSize: 16,
          }}
        >
          Sign Out
        </Text>
        <FontAwesome name="sign-out" size={24} color="black" />
      </Pressable>
    </Link>
  )
}

function DismissComposeButton() {
  const { Link } = useNavigator()

  return (
    <Link href="..">
      <Text
        style={{
          fontWeight: 'normal',
          paddingHorizontal: 8,
          fontSize: 16,
        }}
      >
        Back
      </Text>
    </Link>
  )
}
