import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet, View, Modal, Button } from 'react-native';
import { getCards, cardToList } from './cardDB';

export default function Card(props) {

    const [cards, setCards] = useState();
    const [lists, setLists] = useState();
    const [modalDetails, setDetailsVisible] = useState(false);
    const [modalMove, setMoveVisible] = useState(false);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const setDetails = (card) => {
        setId(card.cardId);
        setTitle(card.cardTitle);
        setContent(card.cardContent);
        setDate(card.cardDate);
        setDetailsVisible(!modalDetails);
    }

    const moveCard = (listId) => {
        cardToList(listId, id);
        setMoveVisible(!modalMove);
    }

    useEffect(() => {
        getCards(props.listId, setCards)
        setLists(props.lists)
    }, [])

    return (
        <View>
            <FlatList data={cards} style={styles.element}
                renderItem={({ item }) => (
                        <View style={styles.padd}>
                            <Text style={styles.cardStyle} onPress={() => setDetails(item)} >{item.cardTitle}</Text>
                        </View>
                )}
                keyExtractor={(item) => item.cardId.toString()} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalDetails}>
                <View style={styles.modal}>
                    <Text>{title}</Text>
                    <Text>{content}</Text>
                    <Text>{date}</Text>
                    <View style={styles.element}>
                        <View style={styles.padd}>
                            <Button title="CLOSE" onPress={() => setDetailsVisible(!modalDetails)} />
                        </View>
                        <View style={styles.padd}>
                            <Button title="MOVE TO LIST" onPress={() => setMoveVisible(!modalMove)} />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalMove}>
                <View style={styles.modal}>
                    <FlatList data={lists} style={{ margin: 10 }}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'column', padding: 10 }}>
                                <Text style={styles.listStyle} onPress={() => moveCard(item.listId)}>{item.listName}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.listId.toString()} />
                    <Button title="CLOSE" onPress={() => setMoveVisible(!modalMove)} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    element: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    padd: {
        padding: 10,
    },

    cardStyle: {
        borderWidth: 2,
        borderColor: 'orange',
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

    listStyle: {
        borderWidth: 2,
        borderColor: 'blue',
        padding: 10,
    },
});