function sortear() {
    const sorteados = [];
    
    const inputQuantidade = document.querySelector("#quantidade").value;
    const inputInicio = document.querySelector("#de").value;
    const inputFim = document.querySelector("#ate").value;
    let resultado = document.querySelector("#resultado");

    
    const quantidade = parseInt(inputQuantidade)
    const inicio = parseInt(inputInicio);
    const fim = parseInt(inputFim);
    
    if (isNaN(quantidade) || isNaN(inicio) || isNaN(fim)) {
        alert("Não podem haver campos vazios ou números fracionados, por favor digite um valor inteiro válido!")
    }

    for(let i = 1; i <= quantidade; i++) {
        sorteados.push(gerarNumeroDentroDeIntervalo(inicio, fim));
    }
    
    resultado.textContent = sorteados;

}

function reiniciar() {
    document.querySelector("#quantidade").value = "";
    document.querySelector("#de").value = ""
    document.querySelector("#ate").value = "";
    let resultado = document.querySelector("#resultado");
    resultado.textContent = "Nenhum até agora!";
}

function gerarNumeroDentroDeIntervalo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}