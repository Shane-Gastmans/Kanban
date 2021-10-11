import React, { useState} from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';
import { createBoard } from '../components/boardDB';

export default function NewBoard(props) {

    const [newBoardName, setBoardName] = useState("");

    const nameHandler = (name) => {
        setBoardName(name);
    }

    const saveNewBoard = () => {
        createBoard(props.route.params.userId, newBoardName);
        props.navigation.navigate('HomeScreen');
    }

    return (
        <View style={styles.screen}>
            <TextInput style={styles.inputStyle} placeholder="New Board Name" onChangeText={nameHandler} />
            <Button
                onPress={saveNewBoard}
                title="ADD BOARD"
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