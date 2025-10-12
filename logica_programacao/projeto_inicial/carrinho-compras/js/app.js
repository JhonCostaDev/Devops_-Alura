// const listProducts = [["Fone de ouvido", 100], ["Celular", 1400], ["Óculus VR", 5000]];
// const listProducts = [
//     {
//     name : "Fone de ouvido",
//     value: 100,
//     stock: 100
//     },
//     {
//     name : "Celular",
//     value: 1400,
//     stock: 100
//     },
//     {
//     name : "Oculus VR",
//     value: 5000,
//     stock: 100
//     },
// ]
async function loadStock() {
    try {
        const response = await fetch("../data/listaProducts.json");
        const data = await response.json();
        return data;
    } catch(error) {
        console.error("Erro to load file.json: ", error);
        return null;
    }
}
const listProducts = loadStock();
const listCart = [];

document.querySelector(".formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    const selectInput = document.querySelector("#produto");
    
    const optionValue = selectInput.value;
    const selectProduct = listProducts.filter(
        product => product.name === optionValue
    );
    //alert(selectProduct[0].name);
    const quantity = Number(document.querySelector("#quantidade").value);
    
    listCart.push([selectProduct[0].name,selectProduct[0].value, quantity])

    const displayListProduct = document.querySelector("#lista-produtos");

    displayListProduct.textContent = ""

    listCart.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="texto-azul">${product[2]}x </span>${product[0]} <span class="texto-azul"> R$ ${product[1] * product[2]}</span>`;
        displayListProduct.appendChild(li);
    });

    
    console.log(listProducts);
});