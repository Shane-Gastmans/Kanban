import React from 'react';

export const getBoards = async (userId, setBoards) => {
    await fetch("https://kanbanproject-328107.appspot.com/getBoards", {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({"userId": userId})
    })
    .then(parameter=>parameter.json())
    .then(json=>setBoards(json));
}