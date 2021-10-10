import React, { useEffect } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import { getUsers } from '../components/userDB';

export default function LoginScreen(props){

    useEffect(() => {
      props.setUserId(1);
    }, [])

    return (
        <View style={styles.screen}>
            <TextInput style={styles.inputStyle} placeholder="Your username" />
            <Button
                onPress={() => props.navigation.navigate('HomeScreen')}
                title="GO TO HOME"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    inputStyle: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        width: '80%',
    },
});