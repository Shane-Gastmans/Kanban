import React from 'react';
import { Text, View, Button } from 'react-native';

export default function HomeScreen(props){

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
        <Button
          onPress={() => props.navigation.navigate('BoardScreen')}
          title="GO TO BOARD SCREEN"
        />
    </View>
    );
}