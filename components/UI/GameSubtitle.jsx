import { Text, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

const GameSubtitle = ({ children, style }) => {
    return (
        <Text style={[styles.gameSubtitle, style]}>{children}</Text>
    )
}

export default GameSubtitle;


const styles = StyleSheet.create({
    gameSubtitle: {
        fontFamily: 'open-sans',
        fontSize: 24,
        color: Colors.yellowColor,
        opacity: 0.5,
    },
});