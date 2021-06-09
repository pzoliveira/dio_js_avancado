var prop1 = 'prop1';
var obj = {
    prop1,
    [prop1 + '1']: prop1 + '1',
    soma(a, b) {return a + b}
};
console.log(obj, obj.soma(1, 2));