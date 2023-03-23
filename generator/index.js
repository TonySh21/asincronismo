function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen(); 

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterador(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterador(['Yoel', 'Gust', 'Tony', 'Este', 'Luis', 'Migue', 'Jona'])

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());