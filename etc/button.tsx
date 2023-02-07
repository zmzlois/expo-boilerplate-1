import React from 'react'
import { Pressable, Text, View } from 'react-native'

export function ToggleButton({ children, selected, onPress }) {
  return (
    <Button
      onPress={onPress}
      buttonStyle={{ backgroundColor: selected ? '#F29938' : '#D1D1D6' }}
    >
      {children}
    </Button>
  )
}

export function Button({
  children,
  onPress,
  style,
  buttonStyle,
  textStyle,
}: {
  children: string
  onPress: () => void
  style?: any
  buttonStyle?: any
  textStyle?: any
}) {
  return (
    <Pressable onPress={onPress} style={style}>
      {({ pressed, hovered }) => (
        <View
          style={[buttonStyle]}
          className="rounded-lg p-4 bg-cyan-600 justify-center items-center hover:opacity-80"
        >
          <Text
            selectable={false}
            style={[textStyle]}
            className="text-2xl text-white text-center"
          >
            {children}
          </Text>
        </View>
      )}
    </Pressable>
  )
}
