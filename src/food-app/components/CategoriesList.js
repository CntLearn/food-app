import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { COLORS, CATEGORIES } from "../constants";
const CategoryList = ({ category, setCategory }) => {
    return <View style={{ marginTop: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CATEGORIES.map((cat) => {
                return <Pressable key={cat.id} onPress={() => setCategory(cat.id)}>
                    <View
                        style={{
                            backgroundColor: category === cat.id ? COLORS.PRIMARY : COLORS.LIGHT,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginHorizontal: 10,
                            borderRadius: 10,

                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowOffset: {
                                width: 0,
                                height: 4
                            },
                        }}               >
                        <Text style={{
                            fontWeight: '700',
                            color: category === cat.id ? 'white' : 'black'
                        }}> {cat.category} </Text>
                    </View>
                </Pressable>
            })}
        </ScrollView>
    </View>
}


const styles = StyleSheet.create({

})

export default CategoryList;