import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Pressable, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useAuth } from '../../context/auth'
import { NotesProvider } from '../../context/notes'
import { useNavigator } from '../../hooks'

export const unstable_settings = {
  initialRouteName: 'index',
}

export default function AppLayout() {
  const { createTabNavigator } = useNavigator()
  const Tabs = createTabNavigator()

  return (
    <NotesProvider>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerRight: SignOutButton,
        }}
      >
        <Tabs.Screen
          options={{
            href: {
              pathname: '/index',
              params: {
                foo: 'bar',
              },
            },
            title: 'Notes',
          }}
          name="index"
        />
        <Tabs.Screen
          options={{
            href: {
              pathname: '/compose',
              params: {
                foo: 'bar',
              },
            },
            title: 'Create',
          }}
          name="compose"
        />
        <Tabs.Screen
          name="note/[note]"
          options={{
            href: null,
            title: 'Notes',
          }}
        />
      </Tabs>
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
