import React from 'react'
import { Image, Text, View } from 'react-native'

interface Props {
  name?: string
  uri?: string
}

const CharacterItem: React.FC<Props> = ({ name, uri }) => {
  return (
    <View className="flex-row dark:bg-slate-600 justify-between items-center">
      <Text className="font-normal dark:text-white">{name}</Text>
      <View>
        <Image source={{ uri }} className="w-16 h-16" />
      </View>
    </View>
  )
}

CharacterItem.defaultProps = {
  name: undefined,
  uri: undefined,
}

export default CharacterItem
