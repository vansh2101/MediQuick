import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, ScrollView, TouchableNativeFeedback, Alert } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome } from '@expo/vector-icons';



export default function Home({navigation}) {

    const alert = () => {
        Alert.alert('Confirmation', 'Are you sure you want to call an Ambulance. If this is a false alarm, then you can be penalised.', [
            {
                text: 'Cancel'
            },
            {
                text: 'Confirm',
                onPress: () => {navigation.navigate('Ambulance')}
            }
        ])
    }

    return (
        <ScrollView style={styles.body}>
            <StatusBar hidden={false}/>

            <View style={styles.header}>
                <Image source={require('../assets/logo.png')} style={styles.headerImg}/>
            </View>

            <View style={styles.main}>

                <Text style={styles.heading}>EMERGENCY BUTTONS</Text>
                <View style={styles.buttonContainer}>

                    <View style={{borderRadius: 35, overflow: 'hidden', width:'47%'}}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate('Hospitals')}>
                            <View style={styles.button}>
                                <FontAwesome name="hospital-o" size={43} color="black" />
                                <Text style={styles.buttonText}>Find Hospital</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                    <View style={{borderRadius: 35, overflow: 'hidden', width:'47%'}}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate('Pharmacy')}>
                            <View style={styles.button}>
                                <FontAwesome name="medkit" size={43} color="black" />
                                <Text style={styles.buttonText}>Find Pharmacy</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                </View>

                <View style={{alignItems: 'center'}}>

                    <View style={{borderRadius: 35, overflow: 'hidden', width: '90%'}}>
                        <TouchableNativeFeedback onPress={alert}>
                            <View style={styles.emergencyBtn}>
                                <FontAwesome name="ambulance" size={47} color="black" />
                                <Text style={styles.buttonText}>Call Ambulance</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                </View>

                <View>
                    <Text style={styles.heading}>About Our App</Text>

                    <Text style={styles.content}>
                    MEDIQUICK is Your Emergency Friend who helps you in any kind of medical emergency. You can easily search for nearby hospitals for treatments Also you can find the nearby pharmacies to buy your medicines when needed immediately. Also when you click on the markers of hospitals or pharmacies, you can view their name and address and also see the nearest route to the location. The main feature of this app is the Call Ambulance feature which calls an ambulance from the nearest Ambulance station for you in case you encounter an emergency. Till the Ambulance arrives, you can also chat with the Docto Bot to get some insights on some commonly encountered emergencies.
                    </Text>
                </View>

            </View>

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#ff7272'
    },

    header: {
        flexDirection: 'row',
        paddingVertical: 70,
        justifyContent: 'space-evenly'
    },

    headerImg: {
        width: 290,
        height: 70,
    },

    main: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 5,
    },

    buttonContainer: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },

    button: {
        backgroundColor: '#ffb151',
        borderRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 30,
        alignItems: 'center',
    },

    buttonText: {
        fontSize: RFPercentage(3.1),
        fontFamily: 'montserrat',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    emergencyBtn: {
        backgroundColor: '#ff7272',
        borderRadius: 30,
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 30,
        alignItems: 'center',
    },

    heading: {
        fontFamily: 'geometos', 
        fontSize: RFPercentage(3), 
        paddingHorizontal: 15,
        marginTop: 40
    },

    content: {
        paddingHorizontal: 9,
        paddingVertical: 5,
        fontSize: RFPercentage(2.3),
        color: '#333333',
        fontFamily: 'montserrat'
    }
})