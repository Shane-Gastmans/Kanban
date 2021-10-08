import React from 'react';

export const getBoards = async (userId) => {
    let t = []
    await fetch("https://kanbanproject-328107.appspot.com/getBoards", {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({"userId": userId})
    })
    .then(parameter=>parameter.json())
    .then(anotherParameter=>anotherParameter.forEach(obj => {t.push({"boardId": obj.boardId, "boardName": obj.boardName})}));
    return t
}