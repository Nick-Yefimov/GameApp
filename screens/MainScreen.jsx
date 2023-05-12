import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const MainScreen = () => {
    return (
        <View style={styles.mainScreenContainer}>
            <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#3b021f',
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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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