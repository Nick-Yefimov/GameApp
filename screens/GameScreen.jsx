import { View, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import GameTitle from '../components/UI/GameTitle';
import generateRandomBetween from '../utils/randomNumber';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/UI/PrimaryButton';
import Card from '../components/UI/Card';
import GameSubtitle from '../components/UI/GameSubtitle';



const GameScreen = ({ userNumber, onGameOver }) => {
    let minBoundary = 1;
    let maxBoundary = 100;
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('You a wrong!', 'You know that this is wrong..', [{ text: 'Sorry', style: 'cancel' }])
            return;
        }
        direction === 'lower' ? maxBoundary = currentGuess : minBoundary = currentGuess + 1;
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <GameTitle>Opponent's Guess</GameTitle>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <GameSubtitle style={styles.subtitle}>Higher or lower?</GameSubtitle>
                <View style={styles.buttonsWrapper}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='md-remove' size={24} color='#fff' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name='md-add' size={24} color='#fff' />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    subtitle: {
        marginBottom: 12,
    },
    buttonsWrapper: {
        flexDirection: 'row',
        margin: 12,
    },
    buttonContainer: {
        flex: 1,
    },
})