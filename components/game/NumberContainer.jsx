import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../utils/colors';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numbersText}>
                {children}
            </Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellowColor,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numbersText: {
        fontFamily: 'open-sans-bold',
        color: Colors.yellowColor,
        fontSize: 36,
    },
})