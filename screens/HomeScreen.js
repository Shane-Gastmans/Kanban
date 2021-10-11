import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, Alert, StyleSheet } from 'react-native';
import { getBoards } from '../components/boardDB';

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
    <View style={styles.screen}>
        <Text style={{ fontSize: 30 }}>BOARDS</Text>
        <Button
            onPress={() => props.navigation.navigate('NewBoard', { userId: props.userId })}
            title="ADD NEW BOARD"
        />
        <FlatList data={boards} style={{margin: 10}}
            renderItem={({item}) => (
                <View style={styles.element}><Text style={styles.boardStyle} onPress={() => props.navigation.navigate("BoardScreen", { boardId: item.boardId })}>{item.boardName}</Text></View>
            )}
            keyExtractor={(item) => item.boardId.toString()} />
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    element: {
        padding: 10,
    },

    boardStyle: {
        borderWidth: 2,
        borderColor: 'green',
        padding: 10,
        width: '100%',
    },
});