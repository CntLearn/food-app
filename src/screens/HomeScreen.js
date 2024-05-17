import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";

const HomeScreen = () => {
    return (
    <View style={styles.container}>
        <Header label={'Food Centel'} />
        <Text style={{padding:'10px'}}> Hello World</Text>
        <RestaurantCard />
        <StatusBar style="dark-content" />
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    backgroundColor:'#6c5ce7'
    },
  });


  export default HomeScreen;