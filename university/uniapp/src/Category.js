import React from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const Category = () => {

    const results = [
        {
            id: '1',
            cat: 'Cardboard',
            type: 'Auction type',
            meteria: 'Plastic',
            scale: '1:12',
            btn: 'Select'

        },

        {
            id: '2',
            cat: 'Cardboard',
            type: 'Auction type',
            meteria: 'Plastic',
            scale: '1:12',
            btn: 'Select'

        },

    

    ]

    const second = [
        {
            
                id: '1',
                cat: 'Cardboard',
                type: 'Auction type',
                meteria: 'Plastic',
                scale: '1:12'
    
            
        },

    {
            id: '2',
            cat: 'Cardboard',
            type: 'Auction type',
            meteria: 'Plastic',
            scale: '1:12'

    }   

    ]

    const drafts = [
        {
            id: '1',
            picture: require('../assets/bottle1.jpg'),
            title: 'Reusabl bulbs 59KG ',
            type: 'Auction type',
            country: 'Sri Lanka'
            
        },

        {
            id: '2',
            picture: require('../assets/bulb.jpg'),
            title: 'Reusabl bulbs 59KG ',
            type: 'Auction type',
            country: 'Sri Lanka'
            
        },

        {
            id: '3',
            picture: require('../assets/papers1.jpg'),
            title: 'Reusabl bulbs 59KG ',
            type: 'Auction type',
            country: 'Sri Lanka'
            
        },
    ]


  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.topBar}>
            <Image source={require('../assets/back.png')} style={styles.backArrow}></Image>
            <Text style={styles.txt}>Back</Text>
        </View>
        <View style={styles.catSearch}>
            <TextInput style={styles.catSearch} placeholder='Enter your category'></TextInput>
        </View>
        <View style={styles.catSearchArrow}>
           
        </View>

        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20, marginHorizontal: 25}}>Similar products from our catalog</Text>

        <FlatList 
            horizontal= {true}
            data={results}
            renderItem = {({item})=>
            
                    <View style={styles.conBox}>
                        <Image style={styles.boxImg} source={require('../assets/papers1.jpg')}></Image>
                        <View style={styles.details}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.cat}</Text>
                            <Text style={styles.txtDeco}>{item.type}</Text>
                            <Text style={styles.txtDeco}>{item.meteria}</Text>
                            <Text style={styles.txtDeco}>{item.scale}</Text>
                        
                            <TouchableOpacity style={styles.click}>

                                <Text style={styles.btnTxt}>Select</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
    

        }
        
        />

<FlatList 
            horizontal= {true}
            data={second}
            renderItem = {({item})=>
            
                    <View style={styles.conBox}>
                        <Image style={styles.boxImg} source={require('../assets/papers1.jpg')}></Image>
                        <View style={styles.details}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.cat}</Text>
                            <Text style={styles.txtDeco}>{item.type}</Text>
                            <Text style={styles.txtDeco}>{item.meteria}</Text>
                            <Text style={styles.txtDeco}>{item.scale}</Text>

                            <TouchableOpacity style={styles.click}>

                                <Text style={styles.btnTxt}>Select</Text>

                            </TouchableOpacity>
            
                        </View>
                    </View>
    

        }
        
        />

        <Text style={{fontSize: 16, fontWeight: 'bold', marginHorizontal: 25, marginTop: 15, color: 'black'}}>Darft Listings</Text>

        <FlatList 
            horizontal= {true}
            data = {drafts}
            renderItem = {({item})=>

                <View style={styles.list}>
                    <Image style={styles.draftPic} source={item.picture} />
                    <Text style={{fontSize: 14, fontWeight: 'bold',marginHorizontal: 20}}>{item.title}</Text>
                    <Text style={styles.drafDetail}>{item.type}</Text>
                    <Text style={styles.drafDetail}>{item.country}</Text>

                    <TouchableOpacity style={styles.draftBtn}>

                         <Text style={styles.draftTxt}>Resume</Text>

                    </TouchableOpacity>
                </View>

            }
        
        />
    
    </SafeAreaView>
  )
}

export default Category

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#F5FCFF'
    },

    topBar:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        

        
    },

    txt:{
        color: 'black',
        fontSize: 18,
        marginLeft: 20,
        
    },

    backArrow:{
        height: 22,
        width: 22,
        marginLeft: 15, 
        
    },
    catSearch:{
        backgroundColor: '#fff',
        height: 33,
        width: '80%',
        marginHorizontal: 25,
        marginTop: 5,
        fontSize: 12,
        fontWeight: '550',
        borderRadius: 5
    },

    rightAroow:{

    },

    conBox:{
        height: 150,
        width: 220,
        backgroundColor: '#ffff',
        marginHorizontal: 25,
        marginTop: 20,
        flexDirection: 'row',
       
    },

    boxImg:{
        marginTop: 10,
        height: 120,
        width: 80,
        borderRadius: 5,
        marginLeft: 10
    },

    details:{
        marginLeft: 10
    },

    txtDeco:{
        color: 'gray',
        fontSize: 12,
    },

    click:{
        backgroundColor: '#5ABBBB',
        height: 25,
        width: 70,
        marginTop: 30,
        color: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

        
    },

    btnTxt:{
        color: '#ffff',
        fontSize: 12,
        fontWeight: '500'
    },

    list:{
        height: 165,
        width: 200,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#ffff',
    
    },

    draftPic:{
        height: 60,
        width: 160,
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 5
    },

    drafDetail:{
        color: 'gray',
        fontSize: 11,
        marginHorizontal: 20
    },

    draftBtn:{
        backgroundColor: '#ffff',
        height: 22,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#5ABBBB',
        marginHorizontal: 50,
        marginTop: 5
        
    },

    draftTxt:{
        color: 'gray',
        fontSize: 12,
        
        
        
    }
})