

function sortear(arr) {
    const pairs = [];

    if(arr.length % 2 !== 0) {
        alert("A lista deve ter um número par de pessoas, para que nenhum amigo fique sem par!");
    }

    //Embaralhar 
    const shuffled = arr.slice().sort(() => Math.random()- 0.5);
    


    //Formando os pares
    for(let i = 0; i < shuffled.length; i += 2) {
        pairs.push([shuffled[i], shuffled[i + 1]]);
    }
    return pairs;
}

const fruits = ["apple", "orange", "grape", "strawberry", "lemon", "banana", "coconut", "avocado"];

const pairs = sortear(fruits);

// for(let values of pairs) {

//     console.log(values);
// }
pairs.forEach((item, idx) => console.log(item));

// const numbers = [5, 3, 1, 4, 2];

// const mixedNumbers = numbers.slice().sort()
// console.log(numbers)
// console.log(mixedNumbers)