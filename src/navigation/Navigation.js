import { Text, View } from "react-native"
import { Button } from "react-native-elements"

function AllNavigation({ navigation }) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Select One of the Following</Text>
        <View style={{ gap: 20, marginTop: 20 }}>
            <Button title={'Restaurant Cards'} type="outline" onPress={() => navigation.navigate('restaurantCards')} />
            <Button title={'Food App'} type="outline" onPress={() => navigation.navigate('Welcome')} />
            <Button title={'Docs Learning'} type="outline" onPress={() => navigation.navigate('Home')} />
        </View>
    </View>
}

export default AllNavigation