import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummey";
//Typescript
import { useRoute, RouteProp } from "@react-navigation/native";
import { rootStackParams } from "../routes/NavigationRouter";
import MealItem from "../components/MealItem";

type MealsInfoRoutes = RouteProp<rootStackParams, "MealsInfo">

export type rendeMeal = {
    title: string;
    imageUrl: string;
    durablity: string;
    affordability: string;
    complexity: string;
}

const MealsInfo: React.FC = () => {
    const route = useRoute<MealsInfoRoutes>();
    const { catID } = route.params;
    const displayedMeals = MEALS.filter((el) => {
        return el.categoryIds.indexOf(catID) >= 0;
    })
    const RenderMealItem = (props: any) => {
        const item = props.item;
        const prop = {
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
