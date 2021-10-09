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