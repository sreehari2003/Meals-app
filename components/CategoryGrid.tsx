import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

interface prop {
  title: string;
  color: string;
  onPress?: () => void;
}

const CategoryGrid = ({ title, color, onPress }: prop) => {
  const navigator = useNavigation();

  return (
    <View style={[styles.gridItem, { backgroundColor: `${color}` }]}>
      <Pressable
        android_ripple={{ color: "#e9c46a" }}
        style={({ pressed }) => [
          styles.btn,
          styles.box,
          pressed ? styles.rip : null,
        ]}
        onPress={onPress}
      >
        <View>
          <Text style={styles.font}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 140,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  font: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  rip: {
    opacity: 0.5,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: "100%",
    width: "100%",
  },
});
