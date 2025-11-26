function alterarStatus(button) {
    //captura o elemento li que envolve todos os elemtos do cardgame
    const inDiv = document.querySelector(`#game-${button} div`)
    inDiv.classList.toggle("dashboard__item__img--rented"); //quando clicado adiciona a classe que escurece a imagem
    
    //captura o primeiro elemento a dentro do li
    const tagA = document.querySelector(`#game-${button} a`);
    tagA.textContent = tagA.textContent === 'Alugar' ? 'Devolver' : 'Alugar'; //ternário para modificação do texto da tag <a>

    //adiciona a classe que modifica o background do button
    tagA.classList.toggle("dashboard__item__button--return");
}