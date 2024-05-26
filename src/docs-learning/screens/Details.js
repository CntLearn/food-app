import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

function DetailsScreen({ route }) {
    const { itemId, others } = route?.params;
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>Item ID: {!!itemId && itemId}</Text>
            <Text>Others: {!!others && others}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details', {
                    itemId: Math.floor(Math.random() * 100),
                    others: 'other Details'
                })}
            />

            <Button style={styles.button} title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button style={styles.button} title="Go back" onPress={() => navigation.goBack()} />
            <Button
                style={styles.button}
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 10,
        borderRadius: 50
    }
})

export default DetailsScreen;