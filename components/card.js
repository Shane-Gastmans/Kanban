import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import { getCards } from './cardDB';

export default function Card(props) {

    const [cards, setCards] = useState();

    useEffect(() => {
        getCards(props.listId, setCards)
    }, [])

    return (
        <FlatList data={cards} style={{margin: 10}}
        renderItem={({item}) => (
            <Text>{item.cardTitle} - {item.cardContent}</Text>
        )}
        keyExtractor={(item) => item.cardId.toString()} />
    )
}