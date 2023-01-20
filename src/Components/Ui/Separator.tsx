import React from 'react'
import { useTheme } from '@/Hooks'
import { StyleSheet, View } from 'react-native'

interface Props {}

const Separator: React.FC<Props> = ({}) => {
  const { Layout, Gutters, Colors } = useTheme()

  return (
    <View
      style={[
        Layout.fill,
        Gutters.regularVMargin,
        styles.containerStyle,
        { backgroundColor: Colors.text },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 1,
  },
})

Separator.defaultProps = {}

export default Separator
