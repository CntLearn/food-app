import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import IconLabel from "./IconLabel";

const iconColor = '#6c5ce7'

const RestaurantCard = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            {/* <Image style={styles.imageStyle} source={require('../../assets/central-perk.jpg')} /> */}
            <Image style={styles.imageStyle} source={item.image} />
            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle}>{item.name}</Text>
                <Text style={styles.categoryStyle}>{item.categories}</Text>
            </View>
            <View style={styles.icons}>
                <IconLabel name='time' label={item.deliveryTime} color={iconColor} />
                <IconLabel name='pin-outline' color={iconColor} label={item.distance} />
            </View>

        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;
const radius = 20;

const styles = StyleSheet.create({

    cardContainer: {
        marginTop: 10,
        width: deviceWidth - 25,
        backgroundColor: '#a29bfe',
        height: 250,
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.75,
        // elevation: 9,
    },
    imageStyle: {
        height: 120,
        width: deviceWidth - 25,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center'
    },
    titleStyle: {
        fontSize: 20,
        // fontWeight: 700
    },
    categoryStyle: {
        // fontWeight: 500
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    icons: {
        flexDirection: 'row',
        gap: 40,
        marginTop: 20,
        marginLeft: 8
    }
})


export default RestaurantCard;