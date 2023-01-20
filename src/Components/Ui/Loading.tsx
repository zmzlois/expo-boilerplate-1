import React from 'react'
import { useTheme } from '@/Hooks'
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native'

interface Props {}

const Loading: React.FC<Props> = ({}) => {
  const { Layout, Colors } = useTheme()

  return (
    <SafeAreaView
      style={[Layout.fill, Layout.colCenter, { backgroundColor: Colors.white }]}
    >
      <ActivityIndicator size={'large'} color={Colors.text} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerStyle: {},
})

Loading.defaultProps = {}

export default Loading
