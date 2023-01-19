import React, { useEffect } from 'react'
import { useLazyFetchCharactersQuery } from '@/Services/modules/rick'
import { useTheme } from '@/Hooks'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Result } from '@/Services/modules/rick/fetchCharacters'

const CharactersContainer = () => {
  const [fetchCharacters, { data, isLoading }] = useLazyFetchCharactersQuery()
  const { Layout, Colors } = useTheme()

  useEffect(() => {
    fetchCharacters()
  })

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          Layout.fill,
          Layout.colCenter,
          { backgroundColor: Colors.white },
        ]}
      >
        <ActivityIndicator size={'large'} color={Colors.text} />
      </SafeAreaView>
    )
  }

  const renderItem: ListRenderItem<Result> | null | undefined = ({ item }) => {
    return (
      <View style={[Layout.rowVCenter, Layout.scrollSpaceBetween]}>
        <Text>{item.name}</Text>
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={[
        Layout.fill,
        Layout.colHCenter,
        { backgroundColor: Colors.white },
      ]}
    >
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        testID={'charactersList'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 66,
  },
})

export default CharactersContainer
