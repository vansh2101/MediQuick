import React, {useState} from 'react';
import { View } from 'react-native';
import GooglePlaceProvider from 'google-place-provider';
import {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


API_KEY = 'AIzaSyAQANy9_WRe6QpdfYFE8HSiBGE4goovb7Q'


async function nearby(lat, lng){
    const googleSearch = new GooglePlaceProvider(API_KEY)

    const nearbySearch = await googleSearch.nearbySearch({
        language: 'en',
        location: String(lat)+','+String(lng),
        rankby: 'distance',
        type: 'healthcare',
        keyword: 'ambulance',
    });

    try{
        const latitude = nearbySearch.results[0].geometry.location.lat
        const longitude = nearbySearch.results[0].geometry.location.lng
        const name = nearbySearch.results[0].name
        const vicinity = nearbySearch.results[0].vicinity

        return {latitude, longitude, name, vicinity}
    }
    catch{
        console.log('error')
    }
}


export default function FindAmbulance({lat, lng}){
    const [region,setRegion] = useState({
        latitude: lat,
        longitude: lng
    })

    const data = nearby(lat,lng);
    data.then((val)=>{
        try{
            setRegion({
                latitude: val.latitude,
                longitude: val.longitude,
                name: val.name,
                vicinity: val.vicinity
            })
        }
        catch{console.log('error')}
    })

    return (
        <View>
            <Marker 
                coordinate={{latitude: region.latitude, longitude: region.longitude}}
                title={region.name}
                description={region.vicinity}
                image={require('../assets/ambulance.png')}
            />

            <MapViewDirections 
                lineDashPattern={[0]}
                origin={{latitude:lat, longitude:lng}}
                destination={{latitude:region.latitude, longitude:region.longitude}}
                apikey={API_KEY}
                strokeWidth={5}
                strokeColor={'blue'}
            />
        </View>
    )
}