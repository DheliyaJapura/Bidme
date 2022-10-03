// React Native Custom Star Rating Bar
// https://aboutreact.com/react-native-custom-star-rating-bar/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const Stars = () => {
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
            
            
          );
        })}
      </View>
      
      
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/*View to hold our Stars*/}
        <View style={styles.txtCon}>
            <Text style={styles.smallTxt}>Service</Text>
            <Text style={styles.smallTxt}>Communication</Text>
            <Text style={styles.smallTxt}>Punctual</Text>
        </View>
        <View style={styles.starCon}>
            <CustomRatingBar />
            <CustomRatingBar />
            <CustomRatingBar />
        </View>
       
      </View>
      
    </SafeAreaView>
  );
};

export default Stars;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    padding: 30,
    display: 'flex',
    flexDirection: 'row'
 
   
  },

  txtCon:{
    marginLeft: -50,
    marginTop: -20
  },

  starCon:{
    marginLeft: 70,
    marginTop: -20


  },
  
  smallTxt:{
    fontSize: 16,
    marginTop: 8,
    fontWeight: '600',
    color: 'black'
  },    

  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  starImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
});