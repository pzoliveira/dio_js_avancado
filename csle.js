console.warn('Warning');
console.error('Error');
console.trace();
console.groupCollapsed('My group');
console.log('Part #1');
console.log('Part #2');
console.time('Time elapsed');
setTimeout(() => {
    console.timeEnd('Time elapsed');
}, 2000);
console.groupEnd();
console.table(['Péricles', 'Zapata']);