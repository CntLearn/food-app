import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const SearchFilter = ({ placeholder, icon, recipeName, setRecipeName }) => {

    return <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingVertical: 10,
            marginVertical: 16,
            borderRadius: 10,
            paddingHorizontal: 16,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowRadius: 8
        }}>
        <Text style={{
            marginRight: 10,
            color: '#f4511e'
        }}>Icon</Text>
        <TextInput
            style={{ color: '#808080' }}
            placeholder={placeholder}
            value={recipeName}
            multiline
            onChangeText={text => setRecipeName(text)}
        />
    </View>
}


const styles = StyleSheet.create({

})

export default SearchFilter;