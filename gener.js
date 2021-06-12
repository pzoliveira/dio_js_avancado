function* hello(){
    console.log('Hello');
    yield 1;
    console.log('from');
    let valor = yield 2;
    console.log(valor);
}

var iter = hello();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next('outside!'));

function* numeros(){
    let nber = 0;
    while(true){
        yield nber;
        nber++;
    }
}

var ni = numeros();
console.log(ni.next());
console.log(ni.next());
console.log(ni.next());
console.log(ni.next());
console.log(ni.next());
console.log(ni.next());
console.log(ni.next());