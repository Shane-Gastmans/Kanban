import React from 'react';

export const getLists = async (boardId, setLists) => {
    await fetch("https://kanbanproject-328107.appspot.com/getLists", {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({"boardId": boardId})
    })
    .then(parameter=>parameter.json())
    .then(json=>setLists(json));
}

export const createList = async (boardId, listName) => {
    let userArr = []
    await fetch("https://kanbanproject-328107.appspot.com/createList",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "boardId": boardId, "listName": listName})
        });
}

export const deleteList = async (listId) => {
    let userArr = []
    await fetch("https://kanbanproject-328107.appspot.com/deleteList",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "listId": listId })
        });
}