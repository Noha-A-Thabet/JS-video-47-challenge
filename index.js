let zero = 0;
let counter = 3;
let my = ['ahmed', 'mazo', 'elham', 'osama', 'gamal', 'ameer'];


//first
console.log(my.slice(zero, ++counter).reverse());
//second
console.log(my.slice(1, 3).reverse());
//third
my.splice(zero, zero, 'Elzero');
console.log(my[zero]);
// //fourth
console.log(my[0][4] + my[zero].slice(++counter).toUpperCase())
