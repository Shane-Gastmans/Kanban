import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, Alert, StyleSheet, Modal, TextInput } from 'react-native';
import { getBoards, createBoard } from '../components/boardDB';

export default function HomeScreen(props){

    const [user, setUser] = useState(0);
    const [boards, setBoards] = useState();
    const [newBoardName, setBoardName] = useState("");
    const [addBoard, setAddBoard] = useState(false);
    const [reload, setReload] = useState();






    const nameHandler = (name) => {
        setBoardName(name);
    }

    const saveNewBoard = () => {
        createBoard(user, newBoardName);
        setAddBoard(!addBoard);
        setBoards();
        setTimeout(() => getBoards(props.userId, setBoards), 200);
        
    }


  useEffect(() => {
      setUser(props.userId);

      let listener = props.navigation.addListener('focus', () => {
          console.log('focussed');
          getBoards(props.userId, setBoards);
      });

      return () => listener()
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
            onPress={() => setAddBoard(!addBoard)}
            title="ADD NEW BOARD"
        />
        <FlatList data={boards} style={{margin: 10}}
            renderItem={({ item }) => (
                <View style={styles.padd}><Text style={styles.boardStyle} onPress={() => props.navigation.navigate("BoardScreen", { boardId: item.boardId, boardName: item.boardName, userId: props.userId })}>{item.boardName}</Text></View>
            )}
            keyExtractor={(item) => item.boardId.toString()} />
        <Modal
            animationType="slide"
            transparent={true}
            visible={addBoard}>
                <View style={styles.modal}>
                    <TextInput style={styles.inputStyle} placeholder="New Board Name" onChangeText={nameHandler} />
                    <View style={styles.element}>
                        <View style={styles.padd}>
                            <Button title="CLOSE" onPress={() => setAddBoard(!addBoard)} />
                        </View>
                        <View style={styles.padd}>
                            <Button title="ADD BOARD" onPress={() => saveNewBoard()} />
                        </View>
                    </View>
                </View>
        </Modal>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    padd: {
        padding: 10,
    },

    element: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    boardStyle: {
        borderWidth: 2,
        borderColor: 'green',
        padding: 10,
        width: '100%',
    },

    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    inputStyle: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        width: '80%',
    },
});