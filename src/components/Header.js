import React from "react";
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const Header = ({label}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.labelStyle}>{label}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;
console.log('devei ', deviceWidth)

const styles = StyleSheet.create({
    container: {
      width: deviceWidth,
      height:90,
      backgroundColor: '#a29bfe',
      alignItems: 'center',
    //   justifyContent:'center'
      justifyContent:'flex-end',
      paddingBottom:20

    },
    labelStyle:{
        fontSize:24,
        fontWeight:700
    }
  });


export default Header;