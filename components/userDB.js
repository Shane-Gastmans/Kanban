
export const getUsers = async (setUsers) => {
  await fetch("https://kanbanproject-328107.appspot.com/getUsers")
  .then(parameter=>parameter.json())
  .then(json=>{setUsers(json)});
}

export const createUser = async (userName) => {
    await fetch("https://kanbanproject-328107.appspot.com/createUser",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({"userName": userName})
    });
}

export const deleteUser = async (userId) => {
    await fetch("https://kanbanproject-328107.appspot.com/deleteUser",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "userId": userId })
        });
}

export const getUsersForLogin = async (userString, setUserId) => {
  await fetch("https://kanbanproject-328107.appspot.com/getUsers")
  .then(parameter=>parameter.json())
  .then(json=>{json.forEach(e => {
    if (e.userName == userString) {
      setUserId(e.userId)
    }
  })});
}

