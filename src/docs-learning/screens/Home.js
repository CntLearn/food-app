import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";

// the navigation is auto passed from the screen component
function HomeScreen({ navigation, route }) {

    const [post, setPost] = useState('')

    useEffect(() => {
        setPost(route?.params?.post)
    }, [route?.params?.post])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                // type="outline"
                type="outline"
                // raised
                title={'Go to Details '}
                style={styles.button}
                onPress={() => navigation.navigate('Details', {
                    itemId: 12,
                    others: 'anything you want here'
                })}
            />
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Details')}>
                <Text> Touch it</Text>
            </TouchableOpacity>

            <Button
                type="clear"
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />

            {/* <Text>Post Details: {post}</Text> */}
            <Text>Post Details: {route?.params?.post}</Text>
            {/* <StatusBar style="dark-content" /> */}
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 10,
        borderRadius: 50
    },
    touch: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        marginTop: 10
    }
})

export default HomeScreen