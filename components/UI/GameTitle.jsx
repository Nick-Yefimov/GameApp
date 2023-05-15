import { Text, StyleSheet } from 'react-native';


const GameTitle = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default GameTitle;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        padding: 12,
    },
})