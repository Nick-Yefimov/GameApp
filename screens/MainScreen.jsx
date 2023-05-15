import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import Colors from '../utils/colors';
import PrimaryButton from '../components/UI/PrimaryButton';
import GameTitle from '../components/UI/GameTitle';
import Card from '../components/UI/Card';
import GameSubtitle from '../components/UI/GameSubtitle';

const MainScreen = ({ onConfirmNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function clearInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has been to be a number berween 1 and 99.',
                [{ text: 'okay!', style: 'destructive', onPress: clearInputHandler }]
            );
            return;
        }
        onConfirmNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <GameTitle>Guess my number</GameTitle>
            <Card>
                <GameSubtitle>Entered a Number</GameSubtitle>
                <TextInput
                    style={styles.textInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonWrapper}>
                        <PrimaryButton onPress={clearInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    textInput: {
        fontSize: 32,
        height: 50,
        width: 50,
        borderBottomColor: Colors.yellowColor,
        borderBottomWidth: 2,
        color: Colors.yellowColor,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',

    },
    buttonWrapper: {
        flex: 1,

    },
})