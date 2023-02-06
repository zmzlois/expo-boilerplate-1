import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ListRenderItem } from "react-native";
import useCharacters from "@hooks/use-characters";
import Loading from "@components/ui/loading";
import CharacterItem from "@components/list-items/character-item";
import Separator from "@components/ui/separator";
import { Character } from "@services/rest/rickandmortyapi/characters/models/character";

const CharactersContainer = () => {
  const { useLazyFetchCharacters } = useCharacters();
  const [fetchCharacters, { data, isLoading }] = useLazyFetchCharacters();

  useEffect(() => {
    fetchCharacters();
  });

  if (isLoading) {
    return <Loading />;
  }

  const renderItem: ListRenderItem<Character> | null | undefined = ({
    item,
  }) => <CharacterItem name={item.name} uri={item.image} />;

  return (
    <SafeAreaView className="bg-white dark:bg-slate-600 flex-1 py-4 px-4 justify-center ">
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        testID={"charactersList"}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
};

export default CharactersContainer;
