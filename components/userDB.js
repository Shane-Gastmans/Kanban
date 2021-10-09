import React from 'react';

export const getUsers = async (setUsers) => {
  await fetch("https://kanbanproject-328107.appspot.com/getUsers")
  .then(parameter=>parameter.json())
  .then(json=>{setUsers(json)});
}

export const createUser = async (userName) => {
    let userArr = []
    await fetch("https://kanbanproject-328107.appspot.com/createUser",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({"userName": userName})
    });
}

export const d = async (userId) => {
    let userArr = []
    await fetch("https://kanbanproject-328107.appspot.com/deleteUser",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({"userId": userId})
    });
}

