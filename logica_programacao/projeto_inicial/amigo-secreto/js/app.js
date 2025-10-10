const friendsList = [];

function sortear() {
    const displayChoice = document.querySelector("#lista-sorteio");
    const randomIdx = Math.floor(Math.random() * friendsList.length);
    //return friendsList[randomIdx];

    if (friendsList.length <= 1) {
        displayChoice.textContent = friendsList[0];
    }
    displayChoice.textContent = friendsList[randomIdx];
    
}

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    const friendName = document.querySelector("#nome-amigo").value;
    const showList = document.querySelector("#lista-amigos");

    friendsList.push(friendName);
    showList.textContent = "";
    friendsList.forEach(friend => {
        const li = document.createElement("li");
        li.textContent = friend;
        showList.appendChild(li);
    })
    //clean input
    document.querySelector("#nome-amigo").value = ""
});

