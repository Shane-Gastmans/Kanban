import React, { useState, useEffect, useReducer } from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import { getBoards } from '../components/boardDB';
import { getUsers } from '../components/userDB';

export default function HomeScreen(props){

  const [boards, setBoards] = useState();

  useEffect(() => {
    getBoards(props.userId, setBoards);
  }, [])

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