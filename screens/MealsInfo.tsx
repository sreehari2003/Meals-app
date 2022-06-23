import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummey";

import { useRoute, RouteProp } from "@react-navigation/native";
import { rootStackParams } from "../routes/NavigationRouter";

type MealsInfoRoutes = RouteProp<rootStackParams, "MealsInfo">

const MealsInfo = () => {
    const route = useRoute<MealsInfoRoutes>();
    const { catID } = route.params;
    return (
        <View>
            <Text>MealsInfo</Text>
        </View>
    );
};

export default MealsInfo;

const styles = StyleSheet.create({})