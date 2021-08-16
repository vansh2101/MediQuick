import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";


export default function ChatMsg({item}){
    if (item.sender == 'bot'){
        return(
            <View style={styles.bot}>
                <Text style={styles.msg}>{item.text}</Text>
            </View>
        )
    }
    else {
        return(
            <View style={{...styles.bot, ...styles.user}}>
                <Text style={styles.msg}>{item.text}</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    bot: {
        borderRadius: 15,
        borderTopLeftRadius: 0,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: '#ffcccc',
        maxWidth: '70%',
        marginTop: 9,
        marginLeft: 7
    },

    msg: {
        fontSize: RFPercentage(2.45),
        fontFamily: 'montserrat'
    },

    user: {
        alignSelf: 'flex-end',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 0,
        backgroundColor: '#bdf5bd',
        marginRight: 7
    }
})