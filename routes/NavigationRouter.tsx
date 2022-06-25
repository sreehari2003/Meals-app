import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//SCREENS
import CategoryScreen from "../screens/CategoryScreen";
import MealsInfo from "../screens/MealsInfo";

export type rootStackParams = {
  Meals: undefined;
  MealsInfo: { catID: string[] };
};

const Stack = createNativeStackNavigator<rootStackParams>();
const NavigationRouter = () => {
  return (
    <>

      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: "black"
          },
          contentStyle: {
            backgroundColor: "black"
          },
          headerTintColor: "white",
          headerTitleAlign: "center"
        }}>
          <Stack.Screen name="Meals" component={CategoryScreen} options={{
            title: "All categories",
          }} />
          <Stack.Screen name="MealsInfo" component={MealsInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default NavigationRouter;
