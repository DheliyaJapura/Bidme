import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ArticlePage = () => {
  return (
    <View style={styles.container}>
       <Image style={styles.pic} source={require('../assets/rel.jpg')}></Image>
       <View style={styles.headcon}>
          <Text style={styles.head}>Effective waste management</Text>
          <TouchableOpacity style={styles.btn}>
              <Image style={styles.chat} source={require('../assets/chat.png')} />
          </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
             <Image style={styles.share} source={require('../assets/share.png')} />
        </TouchableOpacity>

       </View>

       <View style={styles.paracon}>
          <Text style={styles.para}>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.</Text>
       </View>

        <TouchableOpacity style={styles.subBtn}>
          <Text style={{fontSize: 12, fontWeight: '900', color:'black',paddingLeft: 5}}>Coninue reading</Text>
          <Image style={{height: 12, width: 12, marginLeft: 8}} source={require('../assets/drop.png')} />
        </TouchableOpacity>


        <TouchableOpacity style={styles.peopleBtn}>
            <Image style={{height: 30, width: 30, borderRadius: 50, marginTop: 7, marginLeft: 8}} source={require('../assets/beauty.jpg')} />
            <Image style={{height: 30, width: 30, borderRadius: 50, marginLeft: -3,  marginTop: 7}} source={require('../assets/man.jpg')} />
            <Image style={{height: 30, width: 30, borderRadius: 50, marginLeft: -3,  marginTop: 7}} source={require('../assets/woman.jpg')} />
            <Text style={{color:'#6D6C73', fontSize: 11, fontWeight: '800', padding: 15}}>+ 392</Text>
            <Text style={{color:'#6D6C73', fontSize: 11, fontWeight: '400', opacity: 0.8, padding: 15, marginLeft: -15 }}>People are interested</Text>

        </TouchableOpacity>
    </View>
  )
}

export default ArticlePage

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F0FFFF', 
        height: '100%',
        width: '100%',
        position: 'relative',
        
       
    },

   

    pic:{
      height: '50%',
      width: '100%'
    },

    headcon:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10
      

    },

    head:{
      fontSize: 18,
      fontWeight: '900',
      color: 'black',
      marginHorizontal: 10
    },

    btn:{
      height:40 ,
      width: 50,
      backgroundColor: '#5ABBBB',
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    },

    chat:{
      height: 30,
      width: 30,
      
    },

    share:{
      height: 30,
      width: 30
    },

    paracon:{
      marginHorizontal: 10,
      marginTop: 15
    },

    para:{
      fontSize: 12,
      fontWeight: '500',
      letterSpacing: 0.6,
      position: 'absolute',
      
    },

    subBtn:{
      height: 25,
      width: '35%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 135,
      marginVertical: 160,
      position: 'relative',
      backgroundColor: '#CECCD7',
      borderRadius: 10,
      opacity: 0.5,
      
      
      
    },

    peopleBtn:{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#5ABBBB',
      height: 45,
      width: '65%',
      borderRadius: 5,
      position: 'absolute',
      marginVertical: 640,
      marginHorizontal: 75,
      opacity: 0.8,
      //marginTop: 50
      
    }

})  