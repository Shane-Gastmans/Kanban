import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, ScrollView, FlatList, StyleSheet, Button, Modal, Alert } from 'react-native';
import Card from '../components/card';
import { getLists, createList, deleteList } from '../components/listDB';
import { getUsers } from '../components/userDB';
import { createCard } from '../components/cardDB';
import { deleteBoard, addUserToBoard } from '../components/boardDB';

export default function BoardScreen(props){

    const [lists, setLists] = useState();
    const [users, setUsers] = useState();
    const [listId, setListId] = useState(0);
    const userId = props.route.params.userId;
    const boardId = props.route.params.boardId;
    const boardName = props.route.params.boardName;
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [addCard, setAddCard] = useState(false);
    const [addList, setAddList] = useState(false);
    const [invite, setInvite] = useState(false);

    const text1Handler = (text) => {
        setText1(text);
    }

    const text2Handler = (text) => {
        setText2(text);
    }

    const addNewCard = (newlistId) => {
        setListId(newlistId);
        setAddCard(!addCard);
    }

    const addNewList = () => {
        createList(boardId, text1);
        setAddList(!addList);
    }

    const createNewCard = () => {
        createCard(listId, text1, text2);
        setAddCard(!addCard);
        setCount(count + 1);
    }

    const leaveBoard = () => {
        Alert.alert(
            'Leave Board?',
            'Are you sure you want to leave this board and the asigned lists and cards?',
            [
                {
                    text: "No"
                },
                {
                    text: 'Leave Board',
                    onPress: () => {
                        deleteBoard(userId, boardId);
                        props.navigation.navigate('HomeScreen');
                    },
                },
            ]
        );
    }

    const removeList = (listId) => {
        Alert.alert(
            'Delete List?',
            'Are you sure you want to delete this list and the asigned cards?',
            [
                {
                    text: "No"
                },
                {
                    text: 'Remove List',
                    onPress: () => {
                        deleteList(listId);
                    },
                },
            ]
        );
    }

    const inviteUser = (user) => {
        Alert.alert(
            'Invite '+user.userName+'?',
            'Are you sure you want to invite ' + user.userName +' to this board?',
            [
                {
                    text: "No"
                },
                {
                    text: 'Invite',
                    onPress: () => {
                        addUserToBoard(user.userId, boardId);
                    },
                },
            ]
        );
    }

    useEffect(() => {
        getLists(boardId, setLists);
        getUsers(setUsers);
    }, [])

    return (
    <View style={styles.screen}>
        <Text style={{ fontSize: 30 }}>{boardName}</Text>
        <View style={styles.element}>
            <View style={styles.padd}>
                <Button
                    title="ADD LIST"
                    onPress={() => setAddList(!addList)}
                />
            </View>
            <View style={styles.padd}>
                <Button
                    title="INVITE"
                    onPress={() => setInvite(!invite)}
                />
            </View>
            <View style={styles.padd}>
                <Button
                    title="LEAVE"
                    onPress={() => leaveBoard()}
                />
            </View>
        </View>
        <ScrollView horizontal={true}>
            <FlatList data={lists} style={{ margin: 10 }}
            renderItem={({ item }) => (
                <View style={styles.listStyle}>
                    <View>
                        <View style={styles.padd}>
                            <Text style={styles.listStyle}>{item.listName}</Text>
                        </View>
                        <View style={{flexDirection: 'row',}}>
                            <View style={styles.padd}>
                                <Button
                                    title="ADD CARD"
                                    onPress={() => addNewCard(item.listId)}
                                />
                            </View>
                            <View style={styles.padd}>
                                <Button
                                    title="DELETE LIST"
                                    onPress={() => removeList(item.listId)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.element}>
                        <Card listId={item.listId} lists={lists} />
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.listId.toString()} />
        </ScrollView>
        {/*ADD CARD*/}
        <Modal
            animationType="slide"
            transparent={true}
            visible={addCard}>
            <View style={styles.modal}>
                <TextInput style={styles.inputStyle} placeholder="New Card Title" onChangeText={text1Handler} />
                <TextInput style={styles.inputStyle} placeholder="New Card Content" onChangeText={text2Handler} />
                <View style={styles.element}>
                    <View style={styles.padd}>
                        <Button title="CLOSE" onPress={() => setAddCard(!addCard)} />
                    </View>
                    <View style={styles.padd}>
                        <Button title="CREATE CARD" onPress={() => createNewCard()} />
                    </View>
                </View>
            </View>
        </Modal>
        {/*ADD LIST*/}
        <Modal
            animationType="slide"
            transparent={true}
            visible={addList}>
            <View style={styles.modal}>
                <TextInput style={styles.inputStyle} placeholder="New List Name" onChangeText={text1Handler} />
                <View style={styles.element}>
                    <View style={styles.padd}>
                        <Button title="CLOSE" onPress={() => setAddList(!addList)} />
                    </View>
                    <View style={styles.padd}>
                        <Button title="CREATE LIST" onPress={() => addNewList()} />
                    </View>
                </View>
            </View>
        </Modal>
        {/*ADD USER*/}
        <Modal
            animationType="slide"
            transparent={true}
            visible={invite}>
            <View style={styles.modal}>
                <FlatList data={users} style={{padding: 10}}
                renderItem={({ item }) => (
                    <View style={styles.padd}>
                        <Text style={styles.userStyle} onPress={() => inviteUser(item)} >{item.userName}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.userId.toString()} />
                <View style={styles.padd}>
                    <Button title="CLOSE" onPress={() => setInvite(!invite)} />
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

    listStyle: {
        borderWidth: 2,
        borderColor: 'blue',
        padding: 10,
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

    userStyle: {
        borderWidth: 2,
        borderColor: 'green',
        padding: 10,
        width: '100%',
    },
});