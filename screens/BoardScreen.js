import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet, Button } from 'react-native';
import Card from '../components/card';
import { getLists } from '../components/listDB';

export default function BoardScreen(props){

    const [lists, setLists] = useState();
    const boardId = props.route.params.boardId;
    const boardName = props.route.params.boardName;

    useEffect(() => {
        getLists(boardId, setLists);
    }, [])

    return (
    <View style={styles.screen}>
        <Text style={{ fontSize: 30 }}>{boardName}</Text>
        <View style={styles.element}>
            <View style={styles.buttonStyle}>
                <Button
                    title="ADD LIST"
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="ADD CARD"
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="INVITE"
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="LEAVE"
                />
            </View>
        </View>
        <ScrollView horizontal={true}>
            <FlatList data={lists} style={{ margin: 10 }}
            renderItem={({ item }) => (
                <View>
                    <Text style={styles.listStyle}>{item.listName}</Text>
                    <View style={styles.element}>
                        <Card listId={item.listId} lists={lists} />
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.listId.toString()} />
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    buttonStyle: {
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
});