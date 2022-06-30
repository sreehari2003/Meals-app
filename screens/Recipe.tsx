import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { rootStackParams } from '../routes/NavigationRouter'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MEALS } from "../data/dummey";
import RecipieInfo from '../components/RecipieInfo'

type MealsInfoRoutes = RouteProp<rootStackParams, "RecipieInfo">

interface Data {
    imageUrl: string;
}


const Recipe = () => {
    const navigation = useNavigation<NativeStackNavigationProp<rootStackParams>>();
    const routes = useRoute<MealsInfoRoutes>();
    const { mealID, title } = routes.params;
    const [data, setData] = useState<any>();
    const [error, seterror] = useState<boolean>(false);

    useEffect(() => {
        const mealData = MEALS.find((el) => {
            return el.id === mealID;
        });
        if (!mealData) {
            seterror(true);
        } else {
            setData(mealData);
        }
        console.log(data);

    }, [])
    useLayoutEffect(() => {


        let tempTitle = title;
        if (title.length > 20) {
            tempTitle = title.substring(0, 16);
        }
        navigation.setOptions({
            title: tempTitle
        })
    }, [navigation, title])

    // if (error) {
    return (
        <View>
            <Text>Error</Text>
        </View>
    )
    // }

    //     return (
    //         <RecipieInfo image={data.imageUrl.toString()} />
    //     )
}

export default Recipe

const styles = StyleSheet.create({})