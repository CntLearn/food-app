import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { Header, RestaurantCard } from "../../components";
import { restaurants } from '../constants'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header label={'Food Centel'} />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantCard item={item} />}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="light" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
    // backgroundColor: '#6c5ce7'
  },
});


export default HomeScreen;