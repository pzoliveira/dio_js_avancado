//var myErr = new Error('Custom msg');
class myErr extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}
try {
    //throw new Error('Customized msg');
    throw new myErr({message: 'New msg', data:'server side error'});
    console.log(name);
} catch(err) {
    console.log('Msg: ', err.name, '\nData:', err.data);
} finally {
console.log('Hey, I am here!');
}