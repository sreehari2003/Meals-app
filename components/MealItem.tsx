import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rendeMeal } from '../screens/MealsInfo'

const MealItem = ({ title, imageUrl, durablity, affordability, complexity }: rendeMeal) => {
    return (
        <View style={styles.container}>
            <View style={[styles.wrapper, styles.shadow]}>
                <Pressable android_ripple={{ color: "black" }} style={({ pressed }) => pressed ? styles.ripple : null}>
                    <View >
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.detailsText}>{durablity}</Text>
                        <Text style={styles.detailsText}>{affordability}</Text>
                        <Text style={styles.detailsText}>{complexity}</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        padding: 25,
        overflow: "hidden",
        flex: 1,
    },
    image: {
        height: 200,
        width: "100%",
        marginBottom: 7,
    },
    wrapper: {
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "white"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22
    },
    details: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },
    detailsText: {
        fontSize: 16,
        fontWeight: "500"
    },
    shadow: {
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4
    },
    ripple: {
        opacity: 0.7,
    },
})