import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './utils/colors';

import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
	const [userNumber, setUserNumber] = useState();

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
	}

	const screens = userNumber ? <GameScreen userNumber={userNumber} /> : <MainScreen onConfirmNumber={pickedNumberHandler} />

	return (
		<LinearGradient
			style={styles.mainScreen}
			colors={[Colors.gradientMain, Colors.yellowColor]}>
			<ImageBackground
				source={require('./assets/background.png')}
				resizeMode='cover'
				style={styles.mainScreen}
				imageStyle={styles.backgroundImage}>
				<SafeAreaView style={styles.mainScreen}>{screens}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

export default App;

const styles = StyleSheet.create({
	mainScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.13,
	},
})
