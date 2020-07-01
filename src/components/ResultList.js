import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler'

export default function ResultList({title,results}) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            
            
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
