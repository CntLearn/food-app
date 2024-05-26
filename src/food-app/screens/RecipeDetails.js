import React from "react";
import { Image, ScrollView } from "react-native";
import { Text, View } from "react-native";
import { ExtraDetailView } from '../components'

const RecipeDetails = ({ route }) => {
    const { item } = route.params;
    return <View style={{
        //  backgroundColor: '#6f4e37',
        backgroundColor: item.color,
        flex: 1
    }}>
        <View style={{
            backgroundColor: '#fff',
            marginTop: 200,
            flex: 1,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            alignItems: 'center',
            paddingHorizontal: 10
        }}>
            <View
                style={{
                    // backgroundColor: 'red',
                    height: 200, width: 200, position: 'absolute', top: -100
                }}
            >
                <Image
                    source={item.image}
                    style={{ height: '100%', width: '100%', borderRadius: 10, resizeMode: 'stretch' }}
                />
            </View>


            {/* item other details like name des, etc */}
            <View style={{ marginTop: 120, alignItems: 'center', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10, marginVertical: 15 }}>

                <Text>{item.description}</Text>


                {/* extra details */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingHorizontal: 20,
                    marginTop: 10
                }}>
                    <ExtraDetailView
                        // color={item.color}
                        color={'rgba(255,0,0,0.38)'}
                        emoji={'⌚'} text={item.time} />
                    <ExtraDetailView
                        // color={item.color}
                        color={'rgba(135,206,235,0.8)'}
                        emoji={'🧁'} text={item.difficulty} />
                    <ExtraDetailView
                        // color={item.color}
                        color={'rgba(255,165,0,0.48)'}
                        emoji={'🔥'} text={item.calories} />
                </View>

                {/* ingredients */}
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>ingrediants</Text>
                    {
                        item.ingrediants.map(ing => {
                            return <View key={ing} style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 10 }}></View>
                                <Text style={{ fontSize: 16, fontWeight: 400, paddingLeft: 10 }}>{ing}</Text>
                            </View>
                        })
                    }
                </View>

                {/* steps */}
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Steps</Text>
                    {
                        item.steps.map((step, index) => {
                            return <View key={step} style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ fontWeight: 700 }}>{index + 1}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 400, paddingLeft: 10 }}>{step}</Text>
                            </View>
                        })
                    }
                </View>
            </ScrollView>
        </View >
    </View >
}

export default RecipeDetails