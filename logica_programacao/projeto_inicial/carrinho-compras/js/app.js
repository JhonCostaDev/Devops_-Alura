const listCart = []; //Array para armazenar os itens do carrinho.
//TODO: verificar se o item está disponível no estoque.
//TODO: implementar função de limpar o carrinho
function displayListProduct() {
    // Registra a tag html que exibirá a lista de produtos selecionados.
    const displayListProduct = document.querySelector("#lista-produtos");
    
    //Registra a tag html que exibirá o valor total dos produtos selecionados. 
    const sumCartValue = document.querySelector("#valor-total");
    
    //Reseta a lista de produtos selecionados para evitar itens duplicados
    displayListProduct.innerHTML = "";
    
    //Insere a soma no html recebendo um reduce com a soma de todos os items do carrinho.
    sumCartValue.innerHTML =`R$ ${listCart.reduce((sum, item) => sum + (item.value * item.quantity), 0)}`;
    

    // For Each pelo carrinho exibindo o item a quantidade e o valor
    listCart.forEach(product => {
        //Cria a tag html li que será inserida no html
        const li = document.createElement("li");
        
        //Conteúdo da tag li com quantidade - item - valor dos itens no carrinho
        li.innerHTML = `<span class="texto-azul">${product.quantity}x </span>${product.name} <span class="texto-azul"> R$ ${product.value * product.quantity}</span>`;
        //anexa a li ao html
        displayListProduct.appendChild(li);
    });
}

// fetch busca os dados do arquivo json e carrega no select da pagina
fetch("./data/listProducts.json")
    .then(response => response.json())
    .then(products => {
        const selectInput = document.querySelector("#produto"); //vinculo com select do html

        products.forEach(element => { //para cada objeto do array products
        const opt = document.createElement("option"); //cria um option no html
        opt.value = element.name;   // atribui o value da tag option
        opt.textContent = `${element.name} - R$${element.value}`; //exibe o conteudo do option 
        selectInput.appendChild(opt); // adiciona a nova li ao ul
        });


        //Event listener que 'escuta' o submit do botão adicionar no html 
        document.querySelector(".formulario").addEventListener("submit", (e) => {
            e.preventDefault(); //
            
            const optionValue = selectInput.value; // Captura o item selecionado

            //busca o item selecionado no array de produtos e separa o objeto desse produto
            const productSelected =  products.find(product => product.name == optionValue);

            //registra a quantidade escolhida do produto
            const quantity = Number(document.querySelector("#quantidade").value);
            
            //Cria uma nova chave no objeto do produto selecionado com a quantidade selecionada
            productSelected.quantity = quantity;
            
            //Adiciona o objeto selecionado ao array do carrinho
            listCart.push(productSelected);

            // Exibe a lista de produtos selecionados
            displayListProduct();
            
            

        });

    });
