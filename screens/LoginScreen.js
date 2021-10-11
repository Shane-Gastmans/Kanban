import React, { useEffect, useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import { getUsersForLogin } from '../components/userDB';


export default function LoginScreen(props){

    const [userString, setUserString] = useState();

    useEffect(() => {
      if (props.userId) {
        props.navigation.navigate('HomeScreen')
      }
    }, [props.userId])

    return (
        <View style={styles.screen}>
            <TextInput style={styles.inputStyle} placeholder="Your username" onChangeText={setUserString} />

        {/* on press check textInput against query of getUsers on userName, if match set global userId to the matched object's userId */}
            <Button
              onPress={() => getUsersForLogin(userString, props.setUserId)}
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