import React from 'react'
import { StyleSheet, View, Text, FlatList, SafeAreaView, Image } from 'react-native'

const Articles = () => {

    const articalList = [
        {
            id: 1,
            userDp: require('../assets/user.jpg'),
            userName: 'Alexander',
            followbtn: 'fllow',
            photo: require('../assets/rel.jpg'),
            title: 'Effective Waste Management',
            discription: 'Lorem ipsum dolor sit amet, ipsum eruditi ex has, pri cu quem wisi, suas explicari consectetuer et sit.',
            upVoteIcon: require('../assets/up-arrow.png'),
            downVoteIcon: require('../assets/down-arrow.png'),
            voteNum: '82',
            link: 'explore more'

        },
        {
            id: 2,
            userDp: require('../assets/user.jpg'),
            userName: 'Alexander',
            followbtn: 'fllow',
            photo: require('../assets/rep.jpg'),
            title: 'Effective Waste Management',
            discription: 'Lorem ipsum dolor sit amet, ipsum eruditi ex has, pri cu quem wisi, suas explicari consectetuer et sit.',
            upVoteIcon: require('../assets/up-arrow.png'),
            downVoteIcon: require('../assets/down-arrow.png'),
            voteNum: '82',
            link: 'explore more'

        },
        {
            id: 3,
            userDp: require('../assets/user.jpg'),
            userName: 'Alexander',
            followbtn: 'fllow',
            photo: require('../assets/bins.jpg'),
            title: 'Effective Waste Management',
            discription: 'Lorem ipsum dolor sit amet, ipsum eruditi ex has, pri cu quem wisi, suas explicari consectetuer et sit.',
            upVoteIcon: require('../assets/up-arrow.png'),
            downVoteIcon: require('../assets/down-arrow.png'),
            voteNum: '82',
            link: 'explore more'

        },
    ]


  return (
    <SafeAreaView style={styles.container}>
        <FlatList  
            data={articalList}
            renderItem= {({item}) =>
            <View style={styles.box}>
                <View style={styles.subBox}>
                    <Image source={item.userDp} style={styles.dpimg} />
                    <Text style={{fontSize: 13, fontWeight: '700', marginLeft: 10, flex: 1}}>{item.userName}</Text>
                    <Text style={{fontSize: 11, opacity: 7, color: '#0099cc', marginRight: 8}}>{item.followbtn}</Text>
                </View>
                <Image source={item.photo} style={styles.mainPic}/>
                
                <View style={styles.textcon}>
                    <Text style={{fontSize: 15, fontWeight: '800', marginLeft: 12, marginTop: 2}}>{item.title}</Text>
                    <Text style={{fontSize: 10, opacity: 7, color: 'gray', marginLeft: 12}}>{item.discription}</Text>
                <View style={styles.subText}>    
                    <Image source={item.upVoteIcon} style={styles.uparrow} />
                    <Image source={item.downVoteIcon} style={styles.downarrow} />
                    <Text style={{fontSize: 11, color: '#0099cc', marginLeft: 250}}>{item.link}</Text>
                </View>
                </View>
            </View>
        
        }
        keyExtractor={item => item.id}


        
  
        />
    </SafeAreaView>
  )
}

export default Articles

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F0FFFF',
        height: "100%",
        width: "100%",
        display: 'flex',
        alignItems: 'center'
        
    },

    box:{
        backgroundColor:'#fff',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        width: 360,
        height: 280,
        borderRadius: 20,
        
        
        

    },

    subBox:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
        
    },

    dpimg:{
        height: 20,
        width:20,
        borderRadius: 50,
        marginLeft: 10, 

         
    },

    mainPic:{

        height: '50%',
        width: '92%',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 12
    },

    textcon:{

    },

    subText:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 12,
        
    },

    uparrow:{
        height: 10,
        width: 10,
    },

    downarrow:{
        height: 10,
        width: 10
    }
})