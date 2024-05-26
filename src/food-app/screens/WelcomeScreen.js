import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
    return <View style={{ flex: 1, alignItems: 'center' }}>
        <Image style={{
            height: 380,
            width: 340,
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 10
        }} source={require('../../../assets/food-app/fastfood2.jpg')} />
        <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#f96163',
            marginTop: 10
        }}>40k+ Premium Recipes</Text>

        <Text style={{
            fontSize: 35,
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 'bold',
            color: '#3c444c',
            paddingHorizontal: 5
        }}>Cook Like a Chef</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('RecipeList')}
            style={{
                // backgroundColor: 'green',
                backgroundColor: '#f96163',
                paddingVertical: 18,
                borderRadius: 18,
                width: '80%',
                alignItems: 'center',
                marginTop: 10
            }}>
            <Text
                style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 18
                }}
            >Let's Go</Text>
        </TouchableOpacity>

    </View>

}

const styles = StyleSheet.create({

})

export default WelcomeScreen;