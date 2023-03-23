const promise = new Promise(function(resolve, reject) {
    resolve('Hola ITSJ');
});
//Promesa tiene 3 estados: Pendiente, Cumplido, Rechazado.

const vacas = 9;

const ContarVacas = new Promise(function(resolve, reject){
    if (vacas > 10) {
        resolve(`Tienes ${vacas} vacas en la granja`)
    } else {
        reject("No tienes la cantidad suficiente de vacas");
    }
})

ContarVacas.then((result)=> {
    console.log(result);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('Fin de la promesa'));