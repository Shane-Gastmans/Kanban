import React, { useEffect } from 'react';
import { TextInput, Button, View } from 'react-native';
import { getUsers } from '../components/userDB';

export default function LoginScreen(props){

    useEffect(() => {
      props.setUserId(1);
    }, [])

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{ fontSize: 30 }} placeholder="Your username" />
        <Button
          onPress={() => props.navigation.navigate('HomeScreen')}
          title="GO TO HOME"
        />
    </View>
    );
}