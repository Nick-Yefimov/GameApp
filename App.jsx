import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Colors from './utils/colors';

import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
	const [userNumber, setUserNumber] = useState();
	const [isGameOver, setIsGameOver] = useState(true);

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setIsGameOver(false);
	}

	function onGameOverHandler() {
		setIsGameOver(true);
	}


	let screens = userNumber
		? <GameScreen userNumber={userNumber} onGameOver={onGameOverHandler} />
		: <MainScreen onConfirmNumber={pickedNumberHandler} />

	if (isGameOver && userNumber) {
		screens = <GameOverScreen />
	}
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
