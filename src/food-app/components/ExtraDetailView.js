import React from "react";
import { Text, View } from "react-native";

const ExtraDetailView = ({ color, emoji, text }) => {
    return <View style={{ backgroundColor: color, paddingHorizontal: 10, paddingVertical: 10, alignItems: 'center', borderRadius: 10 }}>
        <Text style={{ fontSize: 30 }}> {emoji} </Text>
        <Text style={{ fontWeight: 'bold' }}> {text} </Text>
    </View>
}

export default ExtraDetailView