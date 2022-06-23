import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Center: React.FC = ({ children }) => {
    return (
        <View style={styles.center}>
            {children}
        </View>
    )
}

export default Center

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})