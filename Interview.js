// function foo() {
//     return
//     {
//         message: "Hello World"
//     };
// }
// console.log(foo()); //Undefined


// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }

// var car = Vehicle("Honda", "white", "2010", "UK");
// console.log(car);
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}