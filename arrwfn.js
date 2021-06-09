var soma = (a, b) => a + b;
console.log(soma(5, 10));
var identidade = a => a;
console.log(identidade(1));
var objeto = {
    nome: 'ativado',
    contexto: () => this
};
console.log(objeto.contexto);