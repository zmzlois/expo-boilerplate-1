import React from 'react'
import { useTheme } from '@/Hooks'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
  name?: string
  uri?: string
}

const CharacterItem: React.FC<Props> = ({ name, uri }) => {
  const { Layout, Colors, Fonts } = useTheme()

  return (
    <View style={[Layout.rowVCenter, Layout.scrollSpaceBetween]}>
      <Text style={[Fonts.textRegular, { color: Colors.text }]}>{name}</Text>
      <View>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 66,
  },
})

CharacterItem.defaultProps = {
  name: undefined,
  uri: undefined,
}

export default CharacterItem
