import React from 'react'
import { View,Text,StyleSheet,Image,Button, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'



export const Register = () => {

  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        <View style={styles.bar}>
            <TouchableOpacity style={styles.loginbtn}>
                <Text style={styles.logtxt}>LogIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.regbtn}>
                <Text style={styles.regtxt}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.inputView}>
            
            <TextInput placeholder='Full Name'  style={styles.box}/>   
            <Icon size={25} color='red' name='user-alt' style={styles.miniIon} />
            <TextInput placeholder='Email' style={styles.box} />
            <Icon size={25} color='red' name='user-alt' style={styles.miniIon1} />
            <TextInput placeholder='Password' style={styles.box} />
            <Icon size={25} color='red' name='user-alt' style={styles.miniIon2} />

            <Text style={{marginTop: 40, marginLeft: 15, fontWeight: '800'}}>At least 6 characters</Text>

        </View>

        <Text style={styles.signup}>Sign up with</Text>

        <View style={styles.btnGrp}>
           
             <TouchableOpacity >
                      <Image style={styles.socialImg} source={require('../assets/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
                      <Image style={styles.socialImg} source={require('../assets/apple-black-logo.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
                      <Image style={styles.socialImg} source={require('../assets/facebook.png')} />
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupBtn}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff',textAlign: 'center'}}>Sign Up</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'#F0FFFF',
        width: '100%',
        height: '100%'
        
    },


    logo:{
        marginTop: 20
    },


    bar:{
        width: '80%',
        height: 50,
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center'
        
        
    },

    loginbtn:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 150,
        marginLeft: -40,

    },

    regbtn:{
       alignItems: 'center',
       justifyContent: 'center',
       height: 40,
       width: 140,
       backgroundColor: '#5ABBBB',
       borderRadius: 10,
    
       
       
       
    },

    logtxt:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
         

    },

    regtxt:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 10,
        backgroundColor: '#5ABBBB',
        color: 'white'
        
     
    },

    inputView:{
        marginTop: 10
    },

    box:{
         paddingLeft:10,
         height: 50,
         width: 300,
         backgroundColor: "#fff",
         marginTop: "5%",
         borderRadius: 20,
         shadowColor: 'black',
         position: 'relative'
    
        
    },

    miniIon:{
        position: 'absolute',
        marginVertical:  30,
        marginHorizontal: 200
        
        
    },
    miniIon1:{
        position: 'absolute',
        marginVertical:  100,
        marginHorizontal: 200
    },  

    miniIon2:{
        position: 'absolute',
        marginVertical:  170,
        marginHorizontal: 200
    },

    pic:{
        height: 20,
        width: 20,
    },

    signup:{
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        cursor: 'pointer',
        color: 'black'
    },

    btnGrp:{
      
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        
    },

    socialImg:{
        alignSelf: 'center',
        height: 30,
        width: 30,
        marginLeft: 20,
        
    },

    signupBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '38%',
        backgroundColor: '#5ABBBB',
        borderRadius: 10
    }
    

   
})
