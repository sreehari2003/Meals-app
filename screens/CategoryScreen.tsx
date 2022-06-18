import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummey";
import CategoryGrid from "../components/CategoryGrid";
import { useNavigation } from "@react-navigation/native";

//TYPESCRIPT
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { rootStackParams } from "../routes/NavigationRouter";
interface items {
  color: string;
  title: string;
  id: string;
}
interface itemProp {
  item: items[];
}

const CategoryScreen = () => {
  //a function inside other
  const navigation =
    useNavigation<NativeStackNavigationProp<rootStackParams>>();
  const RenderCategory = (itemData: any) => {
    const { title, color, id } = itemData.item;
    const onPress = () => {
      navigation.navigate("MealsInfo");
    };
    return <CategoryGrid title={title} color={color} onPress={onPress} />;
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={RenderCategory}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 8,
    paddingTop: 34,
  },
});
