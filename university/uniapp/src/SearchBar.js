import React, { useState } from 'react'
import {View, Text, StyleSheet, Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native'
import Tabs from './Tabs'
import Articles from './Articles'






const SearchBar = () => {

    const [status, setStatus] = useState('All')

  return (

    <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/search.png')} />

         <View style={styles.box}>
              <TextInput style={styles.bar} placeholder='Search..'/>
         </View>
         <Tabs/>
         <Articles/>   

            
           
        
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

    box:{
        flexDirection: 'row',
        alignItems: 'center'
        
    },

    bar:{

        position: 'relative',
        backgroundColor: '#fff',
        height: 50,
        width: 370,
        marginHorizontal: 20,
        marginVertical: 25,
        fontSize: 14,
        fontWeight: '550'
        
    },

    icon:{
        zIndex: 1,
        position: 'absolute',
        marginVertical: 40,
        marginLeft: 350,
        height: 20,
        width: 20

    },



    



    
})