import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '@ui/button'
import { useAuth } from '@context/auth'

export default function SignIn() {
  const { signIn } = useAuth()
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="mb-8 text-3xl font-bold">Router Notes</Text>
      <Button
        onPress={signIn}
        buttonStyle={{ backgroundColor: 'dodgerblue', paddingHorizontal: 24 }}
        textStyle={{ fontSize: 24 }}
      >
        Sign In
      </Button>
    </View>
  )
}
