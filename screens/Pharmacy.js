import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import FindPharmacy from '../script/FindPharmacy';
import UpperBar from '../shared/UpperBar';


export default function Pharmacy({navigation}) {
    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.01,
        longitudeDelta: 0.011
    })
    const [regionChange, setRegionChange] = useState(false)
    const [pharmacy, setPharmacy] = useState('FINDING PHARMACY...')

    useEffect(() => {
        (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
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
                latitudeDelta: 0.01,
                longitudeDelta: 0.011
            })
            setPharmacy('PHARMACIES FOUND...')
            setRegionChange(true)
        }
    }
    

    return (
    <View style={styles.body}>
        <UpperBar goBack={() => (navigation.goBack())} title={pharmacy}/>

        <MapView style={styles.map} region={region} provider={PROVIDER_GOOGLE}>
            <Marker 
                coordinate={{latitude: region.latitude, longitude: region.longitude}}
                title={'User Location'}
                pinColor={'green'}
            />

            <FindPharmacy lat={region.latitude} lng={region.longitude}/>

        </MapView>
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
