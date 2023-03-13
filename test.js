//Get all the red cars in the given array.
//Get the unique car and get their index.
let cars = [
    {
        "color": "purple",
        "type": "Volkswagen",
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "capacity": 5
    },
    {
        "color": "white",
        "type": "minivan",
        "capacity": 8
    },
    {
        "color": "red",
        "type": "cabrio",
        "capacity": 2
    },
    {
        "color": "blue",
        "type": "cabrio",
        "capacity": 4
    },
    {
        "color": "green",
        "type": "minivan",
        "capacity": 6
    },
]
// task first answer
const redCars = cars.filter(car => car.color === "red");
console.log(redCars);


// task second answer
//..
let uniqueCars = new Set();
for (let car of cars) {
    uniqueCars.add(car.color);
}
console.log(Array.from(uniqueCars));
