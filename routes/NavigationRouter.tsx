import React from "react";
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
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Meals" component={CategoryScreen} />
          <Stack.Screen name="MealsInfo" component={MealsInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default NavigationRouter;
