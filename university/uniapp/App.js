import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LogIn from './src/Login'
import Search from './src/Search'
import SearchBar from './src/SearchBar'
import Articles from './src/Articles'
import ArticlePage from './src/ArticlePage'
import Category from './src/Category'
import ListingPage from './src/ListingPage'

const App = () => {

  return (
    <View>
      {/* <LogIn/> */}
      {/* <Search /> */}
       {/* <SearchBar/>  */}
       {/* <Category /> */}
       <ListingPage />
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  
})