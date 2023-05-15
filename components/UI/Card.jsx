import { View, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

const Card = ({ children }) => {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
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
});