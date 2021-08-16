import 'react-native-gesture-handler';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import StackNav from './routes/StackNav';


const getfonts = () =>
	Font.loadAsync({
		'montserrat': require('./assets/fonts/Montserrat-Medium.ttf'),
    	'geometos': require('./assets/fonts/Geometos.ttf'),
	})


export default function App() {
  const [font, setFont] = useState(false)

	if (font){
		return (
			<StackNav />
		);
	} 

	else{
		return (
			<AppLoading 
				startAsync={getfonts}
				onFinish={() => setFont(true)}
				onError={console.warn}
			/>
		)
	}

}
