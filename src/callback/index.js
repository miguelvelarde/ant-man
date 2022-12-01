function sum(n1, n2) {
    return n1 + n2;
}

function calc(a, b, callback){
    return callback(a, b);
}

console.log(calc(20, 4, sum));

setTimeout(() => {
    console.log("hola")
}, 3000);

function hello(name){
    console.log(`hola ${name}`)
}

setTimeout(hello, 3000, "Miguel");