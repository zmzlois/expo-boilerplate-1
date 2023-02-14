import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, FlatList, ListRenderItem, Pressable } from 'react-native'
import { Character } from '@services/models/character'
import Loading from '@ui/loading'
import CharacterItem from '@ui/list-items/character-item'
import Separator from '@ui/separator'
import { useRest } from '@hooks/index'

const CharactersContainer = () => {
  const { useCharacters, useLazyCharacters, useLazyCharacterDetail } = useRest()
  const { data, isLoading, isError, isSuccess } = useCharacters()

  const [fetchCharacterDetail] = useLazyCharacterDetail()

  // const [fetchCharacters, { isLoading, isError, isSuccess, data }] =
  //   useLazyCharacters()

  // useEffect(() => {
  //   const init = async () => {
  //     const d = await fetchCharacters()
  //   }
  //   init()
  // }, [])

  // console.log('isLoading', String(isLoading))
  // console.log('isError', String(isError))
  // console.log('isSuccess', String(isSuccess))

  if (isLoading) {
    return <Loading />
  }

  const onPress = async (id: number) => {
    const character = await fetchCharacterDetail({ id })
    Alert.alert('Personaggio', `Provenienza: ${character.data.origin.name}`)
  }

  const renderItem: ListRenderItem<Character> | null | undefined = ({
    item,
  }) => (
    <Pressable onPress={() => onPress(item.id)}>
      <CharacterItem name={item.name} uri={item.image} />
    </Pressable>
  )

  return (
    <SafeAreaView className="bg-white dark:bg-slate-600 flex-1 py-4 px-4 justify-center ">
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        testID={'charactersList'}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  )
}

export default CharactersContainer
