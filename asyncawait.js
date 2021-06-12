const anterior =  () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(12345), 1000);
});

const simplefunc = async () => {
    //throw new Error('Some error');
    const data = await anterior();
    return data;
}
//console.log(simplefunc());
simplefunc()
    .then(data => console.log(data))
    .catch(err => console.log('Erro: ', err));