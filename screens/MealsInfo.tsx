import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummey";
import { useRoute } from "@react-navigation/native";
const MealsInfo = () => {
  const route = useRoute();
  return (
    <View>
      <Text>MealsInfo</Text>
    </View>
  );
};

export default MealsInfo;

const styles = StyleSheet.create({});
