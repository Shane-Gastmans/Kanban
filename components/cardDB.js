
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

export const createCard = async (listId, cardTitle, cardContent) => {
    let now = new Date();
    let cardDate = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + " " + ('0' + now.getHours()).slice(-2) + ":" + ('0' + now.getMinutes()).slice(-2) + ":" + ('0' + now.getSeconds()).slice(-2);
    await fetch("https://kanbanproject-328107.appspot.com/createCard",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "listId": listId, "cardTitle": cardTitle, "cardContent": cardContent, "cardDate": cardDate})
        });
}

export const deleteCard = async (cardId) => {
    await fetch("https://kanbanproject-328107.appspot.com/deleteCard",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "cardId": cardId })
        });
}

export const cardToList = async (listId, cardId) => {
    await fetch("https://kanbanproject-328107.appspot.com/cardToList",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "listId": listId, "cardId": cardId })
        });
}