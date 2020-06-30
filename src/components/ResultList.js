import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultList({title}) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        letterSpacing:2
    }
})
