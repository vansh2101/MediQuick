import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome, AntDesign } from '@expo/vector-icons';



export default function UpperBar({goBack, title}){
    return(
        <View style={styles.bar}>

            <View style={{borderRadius: 35, overflow: 'hidden'}}>
                <TouchableNativeFeedback onPress={goBack}>
                    <View style={{borderRadius: 35}}>
                        <AntDesign name="arrowleft" size={40} color="#f2f2f2" />
                    </View>
                </TouchableNativeFeedback>
            </View>
            
            <Text style={styles.title}>{title}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    bar: {
        width: '90%',
        backgroundColor: '#ff7272',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
        position: 'absolute',
        top: '3%',
        zIndex: 2,
        alignSelf: 'center',
        flexDirection: 'row'
    },

    title: {
        fontSize: RFPercentage(2.3),
        fontFamily: 'geometos',
        textAlignVertical: 'center',
        flex: 1,
        textAlign: 'center'
    }
})