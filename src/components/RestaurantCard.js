import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";


const RestaurantCard = () =>{
    return (
        <View style={styles.cardContainer }>
            <Image style={styles.imageStyle} source={require('../../assets/central-perk.jpg')} /> 
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;
const raduius = 20;

const styles = StyleSheet.create({

    cardContainer : {
        width:deviceWidth - 25,
        backgroundColor:'#a29bfe',
        height:200,
        borderRadius:raduius,
        shadowColor:'#000',
        shadowOffset:{
            width:5,
            height:5
        },
        shadowRadius:5,
        shadowOpacity:0.75,
        elevation:9
    },
    imageStyle : {
        height:180,
        width:deviceWidth - 25,
        borderTopLeftRadius: raduius,
        opacity:0.9
    }

})


export default RestaurantCard;