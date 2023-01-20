import React, { useEffect } from 'react'
import { useLazyFetchCharactersQuery } from '@/Services/modules/rick'
import { useTheme } from '@/Hooks'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import { Result } from '@/Services/modules/rick/fetchCharacters'
import { CharacterItem, Loading, Separator } from '@/Components'

const CharactersContainer = () => {
  const [fetchCharacters, { data, isLoading }] = useLazyFetchCharactersQuery()
  const { Layout, Colors, Gutters } = useTheme()

  useEffect(() => {
    fetchCharacters()
  })

  if (isLoading) {
    return <Loading />
  }

  const renderItem: ListRenderItem<Result> | null | undefined = ({ item }) => (
    <CharacterItem name={item.name} uri={item.image} />
  )

  return (
    <SafeAreaView
      style={[
        Layout.fill,
        Layout.colHCenter,
        Gutters.regularHPadding,
        Gutters.regularVPadding,
        { backgroundColor: Colors.white },
      ]}
    >
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        testID={'charactersList'}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default CharactersContainer
