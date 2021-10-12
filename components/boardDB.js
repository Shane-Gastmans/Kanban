
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

export const createBoard = async (userID, boardName) => {
    await fetch("https://kanbanproject-328107.appspot.com/createBoard",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "userId": userID, "boardName": boardName })
        });
}

export const deleteBoard = async (userId, boardId) => {
    await fetch("https://kanbanproject-328107.appspot.com/deleteBoard",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "userId": userId, "boardId": boardId })
        });
}

export const addUserToBoard = async (userID, boardID) => {
    await fetch("https://kanbanproject-328107.appspot.com/addUserToBoard",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "userId": userID, "boardId": boardID })
        });
}