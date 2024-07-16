( function chai(){
//named IIFE
console.log('DB is coneecyed');
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

( (naming) => {
    console.log(`DB CONNECTED TWO ${naming}`);
})('faltu')