/*const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers);

numbers.forEach((number, index) =>{
    if (number % 2 == 0) {
        console.log(`Numeros pares ${number}, sua posiçao é ${index}!`);
    }  
})*/


// const cars = [
//     {
//         marca: "ford",
//         modelo: "Focus",
//     },
//     {
//         marca: "ferrari",
//         modelo: "f40",
//     },
//     {
//         marca: "fiat",
//         modelo: "palio",
//     },
//     {
//         marca: "BMW",
//         modelo: "BMW Z4",
//     },
// ];



class cars{
    constructor(car, model){
this.car = car,
this.model = model;
    }
}
class CarList{
    constructor(){
        this.cars = []
    }
    send(){
        const carInput = document.getElementById('car');
        const modelInput = document.getElementById('modelo');
        const carText = carInput.value.trim();
        const modelText = modelInput.value.trim();

        if (carText && modelText !== '') {
            const newCar = new cars(carText, modelText);
            this.cars.push(newCar);

            carInput.value = '';
            modelInput.value = '';
        }
    }
}

const SuperCar = new CarList();
SuperCar.cars.forEach((car, marca) => {
    console.log(`Carro: ${car}, Marca: ${marca}`);
})

function Adicione() {
    SuperCar.send();
}