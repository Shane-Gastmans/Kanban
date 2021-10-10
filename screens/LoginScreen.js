import React, { useEffect, useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import { getUsersForLogin } from '../components/userDB';

export default function LoginScreen(props){

    const [userString, setUserString] = useState();

    useEffect(() => {
      if (props.userId) {
        props.navigation.navigate('HomeScreen')
      }
    }, [props.userId])

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{ fontSize: 30 }} placeholder="Your username" onChangeText={setUserString} />

        {/* on press check textInput against query of getUsers on userName, if match set global userId to the matched object's userId */}
        <Button
          onPress={() => getUsersForLogin(userString, props.setUserId)}
          title="GO TO HOME"
        />
    </View>
    );
}