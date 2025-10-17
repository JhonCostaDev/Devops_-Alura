function alterarStatus(button) {
    
    const inDiv = document.querySelector(`#game-${button} div`)
    inDiv.classList.toggle("dashboard__item__img--rented");
    
    const tagA = document.querySelector(`#game-${button} a`);
    tagA.textContent = tagA.textContent === 'Alugar' ? 'Devolver' : 'Alugar';
    tagA.classList.toggle("dashboard__item__button--return");
}