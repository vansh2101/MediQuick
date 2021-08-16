import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Dimensions, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {AntDesign, FontAwesome5, FontAwesome} from '@expo/vector-icons';

import ChatMsg from '../shared/ChatMsg';
import { Msgs } from '../shared/Messages';



export default function ChatBot({navigation}) {
    const [input, setInput] = useState('');

    const [msg, setMsg] = useState([
        {text: 'Hello!! I am Docto Bot. I am here to suggest you what to do in your emergency situation till the ambulance arrives.', sender: 'bot', key: '1'},
        {text: 'What\'s the Emergency? (burns/heart attack/head injury/stroke/convulsion)', sender: 'bot', key: '2'},
    ]);

    const send = () => {
        let add = {text: input, sender: 'user', key: Math.random().toString()}

        if (Msgs[input.toLowerCase()] !== undefined){
            var bot = {text: Msgs[input.toLowerCase()], sender: 'bot', key: Math.random().toString()}
        }
        else{
            var bot = {text: 'Please type in a valid disease.', sender: 'bot', key: Math.random().toString()}
        }

        setMsg((current) => {
            return [...current, add, bot]
        })
        setInput('')
        //recieve msg from the bot
    };

    return(
        <View style={styles.body}>
            <View style={styles.header}>

                <View style={{borderRadius: 35, overflow: 'hidden'}}>
                    <TouchableNativeFeedback onPress={() => {navigation.goBack()}}>
                        <View style={{borderRadius: 35}}>
                            <AntDesign name="arrowleft" size={40} color="#f2f2f2" />
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View style={styles.subHeader}>
                    <FontAwesome5 name="robot" size={38} color="#333333" />
                    <Text style={styles.headerText}>Docto Bot</Text>
                </View>

            </View>

            <View style={{flex: 1, marginBottom: 55}}>
                <FlatList 
                    data={msg}
                    renderItem={({item}) => (
                        <ChatMsg item={item}/>
                    )}
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                    inverted
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={input} onChangeText={setInput}/>

                <TouchableOpacity style={styles.button} onPress={send}>
                    <FontAwesome name="send" size={28} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    body: {
        flex: 1
    },

    header: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 5,
        backgroundColor: '#ff7272',
    },

    subHeader: {
        flexDirection: 'row',
        marginLeft: '10%'
    },

    headerText: {
        fontFamily: 'montserrat',
        fontSize: RFPercentage(4),
        paddingHorizontal: 5,
        color: '#333333'
    },

    inputContainer: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        backgroundColor: '#ff7272',
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent:'center'
    },

    input: {
        width: '85%',
        backgroundColor: 'white',
        padding: 5,
        fontSize: 20,
        fontFamily: 'montserrat',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    button: {
        backgroundColor: '#ffb151',
        padding: 5,
        paddingHorizontal: 12,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
})