import React from 'react'
import { View,Text,StyleSheet,Button, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import Stars from './Stars'


export const Feedback = () => {
  return (
    <View style={styles.main}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', color:'#fff', marginTop: 25}}>Feedback</Text>
         </View>
        <View style={styles.subView}>
            <View style={styles.txtView}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color:'black',  }}>Thank You!</Text>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Please rate the service</Text>
            </View>
            <Stars />
            <TextInput style={styles.txtBox}>
            </TextInput>
        
        </View>     
    </View>

  )
}

export default Feedback

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#117A65',
        height: '100%',
         
    },

    subView:{
        height: 1000,
        backgroundColor: '#F5FCFF',
        marginVertical: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        
    },
    txtView:{
        marginTop: 120,
        alignItems: 'center',
        

    },

    txtBox:{
        marginTop: -10,
        height: 150,
        width: '70%',
        color: 'black',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#5ABBBB',
        borderRadius: 5,
    }
})
