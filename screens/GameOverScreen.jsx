import { StyleSheet, View, Image, Text } from 'react-native';

import Colors from '../utils/colors';

import GameTitle from '../components/UI/GameTitle';
import PrimaryButton from '../components/UI/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    return (
        <View style={styles.mainContainer}>
            <GameTitle>GAME OVER!</GameTitle>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../assets/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone nedeed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to Guess
                the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.darkMainScreenBackGround,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.buttonBackGroundColor,
    },
})