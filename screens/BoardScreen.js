import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default function BoardScreen(props){

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView horizontal={true}>
            <Text style={{ fontSize: 30 }}>This is the Board screen with a horizontal scroll list for the Lists</Text>
        </ScrollView>
    </View>
    );
}