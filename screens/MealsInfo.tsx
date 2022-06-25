import { FlatList, StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummey";
//Typescript
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { rootStackParams } from "../routes/NavigationRouter";
import MealItem from "../components/MealItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type MealsInfoRoutes = RouteProp<rootStackParams, "MealsInfo">

export type rendeMeal = {
    title: string;
    imageUrl: string;
    durablity: string;
    affordability: string;
    complexity: string;
    id: string;
}

const MealsInfo: React.FC = () => {
    const route = useRoute<MealsInfoRoutes>();
    const navigation = useNavigation<NativeStackNavigationProp<rootStackParams>>();

    const { catID } = route.params;

    //here i am dynamically setting the page title
    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((cat) => cat.id == catID)?.title;
        navigation.setOptions({
            title: catTitle
        })
    }, [navigation, catID]);




    const displayedMeals = MEALS.filter((el) => {
        return el.categoryIds.indexOf(catID) >= 0;
    })
    const RenderMealItem = (props: any) => {
        const item = props.item;
        const prop = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            durablity: item.duration,
            affordability: item.affordability,
            complexity: item.complexity
        }
        return <MealItem  {...prop} />
    }

    return (
        <View>
            <FlatList data={displayedMeals} keyExtractor={keyExtractor => keyExtractor.id} renderItem={RenderMealItem} />
        </View>
    );
};

export default MealsInfo;

const styles = StyleSheet.create({})
