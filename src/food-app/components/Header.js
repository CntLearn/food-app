import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title, icon }) => {

    return <View style={{
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between'
    }}>
        <Text style={{ flex: 1, fontWeight: 700, fontSize: 20 }}>
            {title}
        </Text>
        <Text style={{ color: '#f4511e', fontSize: 20 }}>Icon</Text>
    </View>
}


const styles = StyleSheet.create({

})

export default Header;