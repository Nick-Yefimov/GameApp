import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import MainScreen from './screens/MainScreen';

const App = () => {
	return (
		<LinearGradient
			style={styles.mainScreen}
			colors={['#4e0329', '#ddb52f']}>
			<ImageBackground
				source={require('./assets/background.png')}
				resizeMode='cover'
				style={styles.mainScreen}
				imageStyle={styles.backgroundImage}>
				<MainScreen />
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
