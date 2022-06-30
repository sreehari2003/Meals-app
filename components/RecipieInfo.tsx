import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface DataInfo {
    image: string
}


export default function RecipieInfo({ image }: DataInfo) {
    return (
        <View>
            <View style={styles.imgCont}>
                <Image source={{ uri: image }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    imgCont: {
        height: 300,
    }
})