import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';

const Button = ({ onPress, children}) => {
    return (
        <TouchableOpacity onPress={ onPress } style={styles.button}>
            <Text style={styles.text}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 10,
        width: '100%',
        backgroundColor: '#2CEB73',
        borderRadius: 4,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    }
});

export { Button }