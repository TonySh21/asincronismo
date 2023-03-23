const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Async!!'), 5000)
        : reject(new Error('Shiny Loco'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('something');
}

console.log('Before');
anotherFn();
console.log('After');
