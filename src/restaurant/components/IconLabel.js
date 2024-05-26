import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const IconLabel = ({ name, label, color }) => {
    return (
        <View style={styles.container}>
            <Icon name={name} type='ionicon' color={color} size={14} />
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'bottom',
    },
    label: {
        fontSize: 16,
        marginLeft: 5
    }
});


export default IconLabel;