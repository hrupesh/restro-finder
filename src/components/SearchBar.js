import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput  placeholder='Search......' />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#CFD8DC',
        padding:25,
        margin:15,
        marginTop:25,
        borderRadius:50,
        shadowColor:'#512DA8',
        shadowOffset:{
            height:500,
            width:500
        },
        shadowOpacity:1,
        shadowRadius:3.14,
        elevation:25,
        color:'white'
    }
})
