import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from "react-native-elements";

// food app
import { WelcomeScreen, RecipeList, RecipeDetails } from "../food-app";

// Restaurant Cards Youtube
import { HomeScreen as HomeScreenRes } from "../restaurant";

// Docs reading learning.
import { HomeScreen, DetailsScreen, CreatePostScreen } from "../docs-learning";

import AllNavigation from "./Navigation";

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50, borderRadius: 10 }}
            source={require('../../assets/icon.png')}
        />
    );
}


const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // screenOptions={{ headerShow: true }}, instead of passing individual styles to the title, pass here.
                screenOptions={
                    {
                        // ...styles.headerStyles,
                        headerShown: true   // to show and hide header in all screen
                    }
                }
                initialRouteName="All"
            >
                {/* to make multiple apps and navigation */}

                <Stack.Screen
                    name="All"
                    component={AllNavigation}
                    options={{
                        title: 'Welcome to the Apps'
                    }}
                />

                {/* youtube video, food-app */}

                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name="RecipeList"
                    component={RecipeList}
                />
                <Stack.Screen
                    name="RecipeDetails"
                    component={RecipeDetails}
                />

                {/* learn form youtube to make Restaurant cards */}

                <Stack.Screen
                    name="restaurantCards"
                    component={HomeScreenRes}
                    options={{
                        title: 'Restaurant Cards'
                    }}
                />

                {/* below are the screens that are learning from docs reading. */}

                {/* as options params took an object, or a funciton but function should return an object. */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        // title: 'My home',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 1, others: 'initialParams' }}
                    options={
                        // title: 'My home',, if want to pass title then add ,comma to below object and pass it.
                        { ...styles.headerStyles }
                    }
                />
                <Stack.Screen name="CreatePost" component={CreatePostScreen}
                    // if you want to pass image to the title then use like this.
                    options={{
                        headerTitle: (props) => <LogoTitle {...props} />,
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="success"
                                type="clear"
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

const styles = StyleSheet.create({
    headerStyles: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
})

export default AppNavigation;