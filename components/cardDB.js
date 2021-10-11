import React from 'react';

export const getCards = async (listId, setCards) => {
    await fetch("https://kanbanproject-328107.appspot.com/getCards", {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({"listId": listId})
    })
    .then(parameter=>parameter.json())
    .then(json=>setCards(json));
}

export const createCard = async (listId, cardTitle, cardContent, cardDate) => {
    let userArr = []
    await fetch("https://kanbanproject-328107.appspot.com/createUser",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "listId": listId, "cardTitle": cardTitle, "cardContent": cardContent, "cardDate": cardDate})
        });
}

export const deleteCard = async (cardId) => {
    let userArr = []
    await fetch("https://kanbanproject-328107.appspot.com/deleteUser",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "cardId": cardId })
        });
}

export const cardToList = async (listId, cardId) => {
    let userArr = []
    await fetch("https://kanbanproject-328107.appspot.com/createBoard",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "listId": listId, "cardId": cardId })
        });
}