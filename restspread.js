function soma(...valores){
    return valores.reduce((acum, valor) => acum + valor, 0);
}
console.log(soma(1, 2, 3, 4, 5));

const arr1 = [1, 2, 3, 4];
const arr = [...arr1, 5, 6, 7, 8];
console.log(arr);

const obj1 = {
    teste1: 'prop1'
};
const obj2 = {
    ...obj1,
    teste2: 'prop2'
};
console.log(obj1, obj2);

const texto = 'Je veux parler français courament';
console.log(...texto);