import React from 'react'
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native'
import { TextInput } from 'react-native-paper'
import { black } from 'react-native-paper/lib/typescript/styles/colors'

const ListingPage = (title) => {
  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.topBar}>
            <Image source={require('../assets/back.png')} style={styles.backArrow}></Image>
            <Text style={styles.txt}>Back</Text>
        </View>
        <View style={styles.wrap}>
            <View style={styles.mainSubWrap}>
                <Text style={styles.head}>Listing details</Text>
                <Text style={styles.subHead}>Add item title</Text>
                <TextInput style={styles.shortMainBox} 
                  placeholder='eg: Reusable cardboxes for make papers'>
                </TextInput>
            </View>
            <View style={styles.subWrap}>
                <Text style={styles.subHead}>Select category</Text>
                <TextInput style={styles.shortBox} 
                  placeholder= 'eg: Plastic'>
                </TextInput>
                <Image style={styles.dropArrow} source={require('../assets/drop.png')} />
            </View>
            <View style={styles.mainSubWrap}>
                <Text style={styles.subHead}>Custom label (SKU)</Text>
                <TextInput style={styles.shortMainBox} 
                  placeholder='eg: Add your SKU number'>
                </TextInput>
            </View>
            <View style={styles.mainSubWrap}>
                <Text style={styles.subHead}>Custom label (SKU)</Text>
                <TextInput style={{height: 100, width: '90%',  backgroundColor: '#ffff', fontSize: 11}} 
                  placeholder='eg: Add your SKU number'>
                </TextInput>
            </View>
            <View style={styles.mainSubWrap}>
                <Text style={styles.head}>Product details</Text>
                <Text style={styles.subHead}>Add photos</Text>
                <Image style={{height: 20, width: 20}} source={require('../assets/camera.png')} />
                <View style={styles.backBox}>
                    <TextInput style={styles.smallBox} 
                     placeholder='eg: Reusable cardboxes for make papers'>
                    </TextInput>
                </View>
            </View>
    
        </View>
    </SafeAreaView>    
  )
}

export default ListingPage

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#F5FCFF',
        height: '100%'
    },

    topBar:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },

    backArrow:{
        height: 22,
        width: 22,
        marginLeft: 15,
        
    },

    txt:{
        color: 'black',
        fontSize: 18,
        marginLeft: 20,
    },

    wrap:{
        marginHorizontal: 25,
        marginVertical: 25
    },

    mainSubWrap:{
        marginTop: 15
    },

    head:{
        fontSize: 16,
        fontWeight: '180',
        color: 'black',
    
    },

    subHead:{
        fontSize: 13,
        fontWeight: 'bold',
        color: "black",
        marginTop: 10
    },

    shortMainBox:{
        height: 30,
        width: '90%',
        marginTop: 10,
        backgroundColor: '#ffff',
        fontSize: 11,
        color: 'gray'
    },

    subWrap:{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        
    },

    shortBox:{
        height: 30,
        width: '50%',
        backgroundColor: '#ffff',
        fontSize: 11,
        color: 'gray',
        display: 'flex',
        marginTop: 10,
        flexDirection: 'row',
        position: 'relative'
        
    },

    dropArrow:{
        height: 15,
        width: 15,
        position: 'absolute',
        marginLeft: 150,
        marginTop: 45,
    
       
        
    },

    backBox:{
        
    },

    smallBox:{
        height: 50,
        width: '20%',
        marginHorizontal: '50%'
    },



})