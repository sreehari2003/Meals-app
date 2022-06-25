import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { rootStackParams } from '../routes/NavigationRouter'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type MealsInfoRoutes = RouteProp<rootStackParams, "RecipieInfo">


const Recipe = () => {
    const navigation = useNavigation<NativeStackNavigationProp<rootStackParams>>();
    const routes = useRoute<MealsInfoRoutes>();
    const { mealID, title } = routes.params;
    useLayoutEffect(() => {
        let tempTitle = title;
        if (title.length > 20) {
            tempTitle = title.substring(0, 16);
        }
        navigation.setOptions({
            title: tempTitle
        })
    }, [navigation, title])
    return (
        <View>
            <Text>{mealID}</Text>
        </View>
    )
}

export default Recipe

const styles = StyleSheet.create({})