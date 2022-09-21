import React, { useState } from 'react'
import {View, Text, StyleSheet, Image, TextInput, SafeAreaView} from 'react-native'
import Articles from './Articles'

const SearchBar = () => {

    const tabsList = [
        {
            title: 'Products'
        },
        {
            title: 'My Bids'
        },
        {
            title: 'Articles'
        },
    ] 
    
  
  return (

    <View style={styles.container}>

         <SafeAreaView style={styles.tabContainer}>
            <View style={styles.switch} >
                <Text style={styles.word}>Product</Text>
            </View>
            <View style={styles.switch} >
                <Text style={styles.word}>My Bids</Text>
            </View>
            <View style={styles.switch} >
                <Text style={styles.word}>Articles</Text>
            </View>
         </SafeAreaView>
       
    </View>

  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        
        height: '100%',
        width: '100%',
        backgroundColor: '#F5FCFF',
        
        
    },

   

    tabContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        width: '100%',
        height: 50,
        
    
    },

    switch:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: '30%',
        fontWeight: '600',
        backgroundColor: '#fff',
        marginLeft: 10,
        borderRadius: 20,
        borderColor: '#5ABBBB',
        borderWidth: 2
    },

    word:{
        fontWeight: 'bold',
        color: 'black'
    }


    
})