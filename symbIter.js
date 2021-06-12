var identif = Symbol('Oi');
var outroIdent = Symbol('Oi');
console.log(identif);
console.log(identif === outroIdent);
var obj = {
    [identif]: 'Prop1'
};
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));
const arr = [1, 2, 3, 4];
const iterador = arr[Symbol.iterator]();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());