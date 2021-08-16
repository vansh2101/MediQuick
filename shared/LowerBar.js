import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';




export default function LowerBar({navigation}) {
    return(
        <View style={styles.bar}>

            <TouchableOpacity style={styles.buttons}>
                <Ionicons name="call-sharp" size={34} color="black" />
                <Text style={styles.text}>Call Doctor</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() => {navigation.navigate('Chatbot')}}>
                <FontAwesome5 name="robot" size={24} color="black" />
                <Text style={styles.text}>Docto Bot</Text>
            </TouchableOpacity>

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
        bottom: '5%',
        zIndex: 2,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    buttons: {
        backgroundColor: '#ffcccc',
        padding: 5,
        width: '48%',
        elevation: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        textAlign: 'center',
        fontFamily: 'montserrat',
        fontSize: RFPercentage(2.5)
    }
})