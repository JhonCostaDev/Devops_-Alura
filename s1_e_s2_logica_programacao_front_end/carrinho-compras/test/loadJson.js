// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "../data/listProducts.json");

// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.log("Erro", err);
//         return;
//     }
//     products = JSON.parse(data);
//     console.log(products);
// });
// const data = fs.readFileSync(filePath, 'utf-8');
// const products = JSON.parse(data)

//console.log(products);

//==============



// products.forEach(element => {
//     console.log(element.name);
// });

// fetch("../data/listProducts.json")
//     .then(response => response.json())
//     .then(products => {
//         const selectInput = document.querySelector("#selec");

//         products.forEach(element => {
//         const opt = document.createElement("option");
//         opt.value = element.name;
//         opt.textContent = element.name;
//         selectInput.appendChild(opt);
//     });
//     })

const produtos = [
    { "name": "Fone de ouvido", "value": 100, "stock": 100 },
    { "name": "Celular", "value": 1400, "stock": 100 },
    { "name": "Oculus VR", "value": 5000, "stock": 100 },
    { "name": "Smartwatch", "value": 850, "stock": 100 },
    { "name": "Notebook", "value": 3200, "stock": 100 },
    { "name": "Tablet", "value": 1100, "stock": 100 },
    { "name": "Monitor", "value": 950, "stock": 100 },
    { "name": "Teclado mecânico", "value": 450, "stock": 100 },
    { "name": "Mouse gamer", "value": 300, "stock": 100 },
    { "name": "Caixa de som", "value": 600, "stock": 100 },
    { "name": "Webcam HD", "value": 250, "stock": 100 }
]

const listP = []
const compra = "Fone de ouvido"
const compra2 = "Tablet"
const quant = 3;
const result = produtos.find(produto => produto.name === compra)
const result1 = produtos.find(produto => produto.name === compra2)
result.quant = quant;
listP.push(result);
listP.push(result1);
console.log(listP);