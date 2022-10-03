import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Search from './src/Search'
import SearchBar from './src/SearchBar'
import Articles from './src/Articles'
import ArticlePage from './src/ArticlePage'
import Category from './src/Category'
import ListingPage from './src/ListingPage'
import  Feedback  from './src/Feedback'
import Register from './src/Register'
import Login from './src/Login'

const App = () => {

  return (
    <View>
      {/* <Register/>  */}
      <Login/>
      {/* <Search /> */}
       {/* <SearchBar/>  */}
        {/* <Category />  */}
        {/* <ListingPage />   */}
         {/* <Feedback /> */}
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  
})