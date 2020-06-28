import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#fff',
        // flex:1
    }
})
