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