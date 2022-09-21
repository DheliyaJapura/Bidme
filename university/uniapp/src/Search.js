import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, FlatList, Image } from 'react-native'


const Search = () => {

    const result =[
        {
            id: 1,
            image: require('../assets/bulb.jpg'),
            title: 'Reusable medical waste 10kg',
            price: '$25 16 Bids 13 hrs left',
            shipping: 'Ships from Sri Lanka',
            orders: '55+'
        },

        {
            id: 2,
            image: require('../assets/bottle1.jpg'),
            title: 'Reusable medical waste 10kg',
            price: '$25 16 Bids 13 hrs left',
            shipping: 'Ships from Sri Lanka',
            orders: '55+'
        },
        {
            id: 3,
            image: require('../assets/medical.jpg'),
            title: 'Reusable medical waste 10kg',
            price: '$25 16 Bids 13 hrs left',
            shipping: 'Ships from Sri Lanka',
            orders: '55+'
        },
        {
            id: 4,
            image: require('../assets/bulb.jpg'),
            title: 'Paper waste 10KG',
            price: '$25 16 Bids 13 hrs left',
            shipping: 'Ships from Sri Lanka',
            orders: '55+'
        },
        {
            id: 5,
            image: require('../assets/bulb.jpg'),
            title: 'Paper waste 10KG',
            price: '$25 16 Bids 13 hrs left',
            shipping: 'Ships from Sri Lanka',
            orders: '55+'
        },
        {
            id: 6,
            image: require('../assets/bulb.jpg'),
            title: 'Paper waste 10KG',
            price: '$25 16 Bids 13 hrs left',
            shipping: 'Ships from Sri Lanka',
            orders: '55+'
        },
    ]
 
  

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data= {result}
            renderItem= {({item}) =>
        
                <View style={styles.box} >
                    
                        <Image source={item.image} style={styles.pic}/>
                   <View> 
                        <Text style={{fontSize: 15, fontWeight: '700'}} >{item.title}</Text>
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>{item.price}</Text>
                        <Text style={{fontSize: 11, opacity: 7, color: '#0099cc'}}>{item.shipping}</Text>
                        <Text style={{fontSize: 11, opacity: 7, color: '#0099cc'}}>{item.orders}</Text>
                    </View>
                 </View>
        
            }
            keyExtractor={item => item.id}
            contentContainerStyle = {{padding: 10, paddingTop: 20}}
                   
        />
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({

    container:{
        padding: 10,
        backgroundColor: '#F5FCFF',
        height: "100%",
        width: "100%",

    },  

    box:{
        
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.8)',
        height: 111,
        width: 346,
        borderRadius: 10,
        padding: 15,
        shadowColor: "#000",
        ShadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 10

        
        
        
        
    },

    avatarcon:{
       
    },

    pic:{

        height: 80,
        width: 100,
        marginRight: 10,
        borderRadius: 10
    },

    
})