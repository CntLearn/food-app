import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Pressable } from "react-native";
import { COLORS, RecipeList } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Recipies = ({ category, recipeName }) => {
    const navigation = useNavigation();
    return <View style={{ marginTop: 10 }}>
        <FlatList
            data={RecipeList.filter(recipe => recipe.categoryId === category).filter(recipe => recipe.name.includes(recipeName))}
            key={'#'}
            keyExtractor={item => "#" + item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
                justifyContent: 'space-between'
            }}
            renderItem={({ item }) => {
                return <Pressable onPress={() => navigation.navigate('RecipeDetails', { item })}>
                    <View
                        style={{
                            backgroundColor: COLORS.LIGHT,
                            shadowColor: '#000',
                            shadowOpacity: 0.7,
                            shadowOffset: {
                                width: 0,
                                height: 4
                            },
                            shadowRadius: 8,

                            paddingVertical: 10,
                            marginVertical: 10,
                            alignItems: 'center',
                            borderRadius: 10
                        }} >
                        <Image source={item.image} style={{ width: 150, height: 150, borderRadius: 10, resizeMode: 'cover' }} />
                        <Text style={{
                            paddingVertical: 10,
                            paddingHorizontal: 10
                        }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
                            <Text>{item.time}</Text>
                            <Text> | </Text>
                            <View>
                                <Text>{item.rating} <Text style={{ color: COLORS.PRIMARY }}>Rating</Text> </Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            }}
        />
    </View >
}


const styles = StyleSheet.create({

})

export default Recipies;




// style={{
//     backgroundColor: index === 0 ? COLORS.PRIMARY : COLORS.LIGHT,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     marginHorizontal: 10,
//     borderRadius: 10,

//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: {
//         width: 0,
//         height: 4
//     },
// }}               