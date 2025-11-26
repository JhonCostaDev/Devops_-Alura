//Global variables
let ticketPistaDisponiveis = 100; 
let ticketSuperiorDisponiveis = 200; 
let ticketInferiorDisponiveis = 400; 

//Submit form
document.addEventListener("submit", (e) => {
    e.preventDefault();
    //Take inputs
    const typeTicket = document.querySelector("#tipo-ingresso"); 
    const valueTicket = typeTicket.value;
    const inputQuantidade = document.querySelector("#qtd").value;

    const quantidade = parseInt(inputQuantidade)
    
    //Take output displaying result
    const displayQtdPista = document.querySelector("#qtd-pista");
    const displayQtdSuperior = document.querySelector("#qtd-superior");
    const displayQtdInferior = document.querySelector("#qtd-inferior");

    //
    

    // if(!isNaN(quantidade)) {
    //     if (valueTicket === "superior" && quantidade < ticketSuperiorDisponiveis) {
    //         ticketSuperiorDisponiveis -= quantidade;
    //         console.log(`Superior: ${ticketSuperiorDisponiveis}`);
    //     } else if(valueTicket === "pista") {
    //         ticketPistaDisponiveis -= quantidade;
    //         console.log(`Pista: ${ticketPistaDisponiveis}`);
    //     }else {
    //         ticketInferiorDisponiveis -= quantidade;
    //         console.log(`Inferior: ${ticketInferiorDisponiveis}`);
    //     }
    // } else {
    //     alert("Erro, Quantidade tem que ser no mínimo de 1 unidade!");
    // }
    switch (valueTicket) {
        case "superior":
            if(quantidade > ticketSuperiorDisponiveis) {
                alert(`Restam apenas ${ticketSuperiorDisponiveis} para compra!`)
            } else {
                ticketSuperiorDisponiveis -= quantidade;
            }
            break;

        case "pista":
            if(quantidade > ticketPistaDisponiveis) {
                alert(`Restam apenas ${ticketPistaDisponiveis} para compra!`)
            } else {
                ticketPistaDisponiveis -= quantidade;
            }
            break;
       
         case "inferior":
            if(quantidade > ticketInferiorDisponiveis) {
                alert(`Restam apenas ${ticketInferiorDisponiveis} para compra!`)
            } else {
                ticketInferiorDisponiveis -= quantidade;
            }
            break;
        default:
            console.log("Erro");
            break;
    }

    displayQtdPista.textContent = ticketPistaDisponiveis
    displayQtdSuperior.textContent = ticketSuperiorDisponiveis
    displayQtdInferior.textContent = ticketInferiorDisponiveis

});