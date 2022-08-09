import React from 'react'
import { View,Text,StyleSheet,Image,Button, TouchableOpacity, TextInput} from 'react-native'


export const LogIn = () => {

  return (
    <View style={styles.container}>
        <View style={styles.bar}>
            <TouchableOpacity style={styles.loginbtn}>
                <Text style={styles.logtxt}>LogIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.regbtn}>
                <Text style={styles.regtxt}>Register</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.inputView}>
            
            <TextInput placeholder='Full Name' style={styles.box} />
            <TextInput placeholder='Email' style={styles.box} />
            <TextInput placeholder='Password' style={styles.box} />
        </View>

        <Text style={styles.signup}>Sign up with</Text>

    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'#F0FFFF',
        width: '100%',
        height: '100%'
        
    },



    bar:{
        
        marginTop: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30
        

    },

    loginbtn:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 150,
    },

    regbtn:{
       alignItems: 'center',
       justifyContent: 'center',
       height: 30,
       width: 100,
       backgroundColor: '#5ABBBB',
       borderRadius: 30
    },

    logtxt:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'

    },

    regtxt:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 10,
        backgroundColor: '#5ABBBB'
        
        
    },

    inputView:{
        marginTop: 10
    },

    box:{
         paddingLeft:10,
         height: 50,
         width: 300,
         backgroundColor: "#fff",
         marginTop: "10%",
         borderRadius: 30,
         shadowColor: 'black'
         
    
        
    },

    pic:{
        height: 20,
        width: 20,
    },

    signup:{
        fontWeight: 'bold',
        marginTop: 100,
        textAlign: 'center',
        cursor: 'pointer'
    }

   

   
})
