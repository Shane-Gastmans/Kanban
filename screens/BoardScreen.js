import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import Card from '../components/card';
import { getLists } from '../components/listDB';

export default function BoardScreen(props){

    const [lists, setLists] = useState();
    const boardId = props.route.params.boardId;

    useEffect(() => {
        getLists(boardId, setLists);
    }, [])

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>BOARDID: {boardId}</Text>
        <ScrollView horizontal={true}>
        <FlatList data={lists} style={{margin: 10}}
            renderItem={({item}) => (
                    <View>
                        <Text>{item.listName}</Text>
                        {/* HERE GO CARDS */}
                        <Card listId={item.listId} />
                    </View>
            )}
            keyExtractor={(item) => item.listId.toString()} />
        </ScrollView>
    </View>
    );
}