// array para armazenar os amigos
const friendsList = [];

//Função chamada pelo btn sortear, 
function sortear() {
    //array que receberá os pares sorteados
    const pairs = [];

    //verifica se o número de indivíduos do array é par
    if(friendsList.length % 2 !== 0) {
        alert("A lista deve ter um número par de pessoas, para que nenhum amigo fique sem par!");
    } else {
    
    // shuffled (embaralhar) embaralha os elementos do array sem modificar o array original
    const shuffled = friendsList.slice().sort(() => Math.random()- 0.5);


    //forma os pares
    for(let i = 0; i < shuffled.length; i += 2) {
        pairs.push([shuffled[i], shuffled[i + 1]]);
    }

    // Chama a função que exibirá no html os pares selecionados.
    showPairs(pairs);
    }

    
}

// Função responsável por exibir os pares no html
function showPairs(arr) {
    //Vincula com a tag html para exibir os pares
    const displayPair = document.querySelector("#lista-sorteio");

    //iteração pelo array de pares
    arr.forEach((pair, __) => {
        //vincula e cria uma tag li
        const li = document.createElement("li");
        //inseri no li os pares
        li.innerHTML = `${pair[0]} --> ${pair[1]}`;
        //adiciona a tag li a tag ul no html
        displayPair.appendChild(li);
    })
}

//Listener do botão adicionar do formulario html
document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    //Vincula o conteúdo do input text no html
    const friendName = document.querySelector("#nome-amigo").value;

    //Vincúla a tag onde serão exibidos os dados adicionados
    const showList = document.querySelector("#lista-amigos");

    //adiciona o conteúdo do input text no array de amigos
    friendsList.push(friendName);
    
    //Reseta a lista de amigos para evitar duplicidade no html
    showList.textContent = "";
    
    // Itera pelo array criando elementos tag li e exibindo no html.
    friendsList.forEach(friend => {
        const li = document.createElement("li");
        li.textContent = friend;
        showList.appendChild(li);
    })
    //clean input

    //Reseta o input text
    document.querySelector("#nome-amigo").value = ""
});

