import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import Colors from '../utils/colors';
import PrimaryButton from '../components/UI/PrimaryButton';

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
        <View style={styles.mainScreenContainer}>
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
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    mainScreenContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.darkMainScreenBackGround,
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.5,
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