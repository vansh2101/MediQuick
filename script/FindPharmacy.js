import React, {useState} from 'react';
import { View } from 'react-native';
import GooglePlaceProvider from 'google-place-provider';
import {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const API_KEY = '<YOUR GOOGLE MAPS API KEY>'


async function nearby(lat, lng){
    let region = []

    const googleSearch = new GooglePlaceProvider(API_KEY)

    const nearbySearch = await googleSearch.nearbySearch({
        language: 'en',
        location: String(lat)+','+String(lng),
        rankby: 'distance',
        type: 'pharmacy',
        keyword: 'medicine',
    });

    try{
        for(let i=0; i < 7; i++){
            var latlng = {
                latitude: nearbySearch.results[i].geometry.location.lat, 
                longitude: nearbySearch.results[i].geometry.location.lng,
                name: nearbySearch.results[i].name,
                vicinity: nearbySearch.results[i].vicinity,
                key: i
            }

            region.push(latlng)
        }

        return region
    }
    catch{
        return ([{latitude: lat, longitude: lng, name:'pharmacy', vicinity: 'pharmacy'}])
    }
}


export default function FindPharmacy({lat, lng}){
    const [region,setRegion] = useState([
        {latitude: lat, longitude: lng, name: 'hospital', vicinity:'hospital'},
    ])

    const [show, setShow] = useState({
        latitude: lat, longitude: lng
    })

    const data = nearby(lat,lng);
    if (region.length < 5) {
        data.then((val)=>{
            try{
                setRegion(val)
            }
            catch{console.log('error')}
        }).catch((error) => {console.log(error)})
    }

    return (
        <View>
            {region.map((item) => {
                return(
                    <View>
                        <Marker 
                            coordinate={{latitude: item.latitude, longitude: item.longitude}}
                            title={item.name}
                            description={item.vicinity}
                            key={item.key}
                            onPress={() => setShow({latitude: item.latitude, longitude: item.longitude})}
                            image={require('../assets/hospital.png')}
                        />

                        <MapViewDirections 
                            lineDashPattern={[0]}
                            origin={{latitude:lat, longitude:lng}}
                            destination={{latitude:show.latitude, longitude:show.longitude}}
                            apikey={API_KEY}
                            strokeWidth={5}
                            strokeColor={'blue'}
                        />
                    </View>
                )
            })
            }
        </View>
    )
}
