import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, Alert } from 'react-native';
import { getBoards } from '../components/boardDB';
import { getUsers } from '../components/userDB';

export default function HomeScreen(props){

  const [boards, setBoards] = useState();

  useEffect(() => {
    getBoards(props.userId, setBoards);
  }, [])

  useEffect(
    () =>
      props.navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();

        Alert.alert(
          'Switch user?',
          'You are about to switch user, are you sure?',
          [
            { text: "No"},
            {
              text: 'Switch user',
              onPress: () => {props.setUserId(null);props.navigation.dispatch(e.data.action)},
            },
          ]
        );
      }),
    [props.navigation]
  );


    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
        <Button
          onPress={() => props.navigation.navigate('BoardScreen')}
          title="GO TO BOARD SCREEN"
        />
        <FlatList data={boards} style={{margin: 10}}
            renderItem={({item}) => (
                    <Text onPress={() => props.navigation.navigate("BoardScreen", {boardId: item.boardId})}>{item.boardName}</Text>
            )}
            keyExtractor={(item) => item.boardId.toString()} />
    </View>
    );
}