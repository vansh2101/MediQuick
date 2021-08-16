import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import FindAmbulance from '../script/FindAmbulance';
import UpperBar from '../shared/UpperBar';
import LowerBar from '../shared/LowerBar';


export default function Ambulance({navigation}) {
    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006
    })
    const [regionChange, setRegionChange] = useState(false)
    const [ambulance, setAmbulance] = useState('FINDING AMBULANCE...')

    useEffect(() => {
        (async () => {
            if (!regionChange){
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
            }
        }
        )();
        }, 
        []
    );

    if (location) {
        if (!regionChange){
            setRegion({
                latitude: location['coords']['latitude'],
                longitude: location['coords']['longitude'],
                latitudeDelta: 0.006,
                longitudeDelta: 0.006
            })
            setAmbulance('AMBULANCE ARRIVING SOON')
            setRegionChange(true)
        }
    }
    

    return (
    <View style={styles.body}>
        <UpperBar goBack={() => (navigation.goBack())} title={ambulance}/>

        <MapView style={styles.map} region={region} provider={PROVIDER_GOOGLE}>
            <Marker 
                coordinate={{latitude: region.latitude, longitude: region.longitude}}
                title={'User Location'}
                pinColor={'green'}
            />

            <FindAmbulance lat={region.latitude} lng={region.longitude}/>

        </MapView>

        <LowerBar navigation={navigation}/>
    </View>
    );
}



const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  map: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
  }
});
