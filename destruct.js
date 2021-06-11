var arr = ['Maçã', 'Banana', 'Melão', ['Manga']];
var [f1, f2, f3, [f4]] = arr;
console.log(f1, f2, f3, f4);

const obj = {
    nome: 'Jenny',
    idade: 27,
    sexo: 'f',
    notas: [7.1, 8.2, 8.0]
};
const {nome, idade, sexo, notas: [n1, n2, n3]} = obj;
console.log(nome, idade, sexo, n1, n2, n3);

let arrObj = [{nome: 'Jenny', idade: 27, sexo: 'f'},
{nome: 'Emily', idade: 25, sexo: 'f'},
{nome: 'Peter', idade: 30, sexo: 'm'}];
let [{nome: nome1, idade: idade1, sexo: sexo1}, obj2arr, obj3arr] = arrObj;
console.log(nome1, idade1, sexo1, obj2arr, obj3arr);