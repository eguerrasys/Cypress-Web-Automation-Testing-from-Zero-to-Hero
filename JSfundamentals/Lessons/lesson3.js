//objects
var customer = {
    name : 'alex', 
    last : 'smith',
    cars : ["bm", "aud", "ferra"]
}

console.log(customer) // print , { name: 'alex', last: 'smith' }
console.log(customer.last)// print, smith
customer.name = 'name2'
customer.last = 'secondlas'
console.log(`${customer.name} ${customer.last}`)


// arays
var cars = ["bm", "aud", "ferra"]
cars[2] = "tesl"
console.log(cars[2])
console.log(customer.cars[1])