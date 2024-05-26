import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { CategoryList, Header, Recipies, SearchFilter } from "../components";

const RecipeList = () => {
    const [category, setCategory] = useState(1);
    const [recipeName, setRecipeName] = useState('');
    return <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
        <View>
            {/* HEADER */}
            <Header title={'Hi, Zain'} />

            {/* Search Filter Input */}
            <SearchFilter placeholder={'Enter Recipe Name'} recipeName={recipeName} setRecipeName={setRecipeName} />
        </View>

        {/* categries list */}
        <View style={{ marginTop: 10 }}>
            <Text style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 10
            }}>Categories</Text>
            <CategoryList category={category} setCategory={setCategory} />
        </View>

        {/* recipies list */}
        <View style={{ marginTop: 10, flex: 1, marginBottom: 60 }}>
            <Text style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 10
            }}>Recipies</Text>
            <Recipies category={category} recipeName={recipeName} />
        </View>

    </SafeAreaView>
}


const styles = StyleSheet.create({

})

export default RecipeList;