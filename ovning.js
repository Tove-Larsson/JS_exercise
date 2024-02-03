/* Uppgift 1: 
Vi har en lista av siffror, och vill ta de jämna siffrorna och dubbla deras värden. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] 

const evenNumbers = numbers.filter(number =>number % 2 == 0).map(number=>number *2)

console.log(evenNumbers)

/* Alternative solution (must make it a list later on though)
for (let number of numbers) {
    if (number % 2 == 0) {
        console.log(number * 2)
    }
} */


// Uppgift 2: 
// Vi har en lista av användare. Vår chef på bolaget vill ha en lista med namnen på alla våra användare som är 
// över 18 år gamla. 
const users = [ 
{ name: 'Alice', age: 25 }, 
{ name: 'Bob', age: 17 }, 
{ name: 'Charlie', age: 30 }, 
{ name: 'David', age: 15 }, 
] 

const adultUsers = users.filter(user=>user.age >= 18).map(user=>user.name)

console.log(adultUsers)

// alternative solution 

// const removeAge = adultUsers.map(user =>user.name)
// console.log(removeAge) 


// Uppgift 3: 
// Den här gången vill vår chef ha alla användares namn som är i ålderspannet 15-20 och ålderspannet 50+. 
const userss = [ 
{ name: 'Alice', age: 25 }, 
{ name: 'Bob', age: 17 }, 
{ name: 'Charlie', age: 30 }, 
{ name: 'Berith', age: 63 }, 
{ name: 'Claes', age: 48 }, 
{ name: 'Kerstin', age: 72 }, 
{ name: 'Lars', age: 54}, 
{ name: 'David', age: 15 }, 
] 

const ageSpan = userss.filter(user=>user.age >= 15 && user.age <=20 || user.age > 50).map(user=>user.name)

console.log(ageSpan)


// Uppgift 4: 
// Våran chef är jobbig och har tråkigt. Denna gång vill han ha summan av alla våra användares åldrar. 
const usersss = [ 
{ name: 'Alice', age: 25 }, 
{ name: 'Bob', age: 17 }, 
{ name: 'Charlie', age: 30 }, 
{ name: 'Berith', age: 63 }, 
{ name: 'Claes', age: 48 }, 
{ name: 'Kers n', age: 72 }, 
] 

const ageSum = usersss.reduce((sum, user) => sum + user.age , 0)

console.log(ageSum)



//  Uppgift 5: 
// Vi ska jobba på varukorgen för bolagets webbshop. I varukorgen har vi indata som består utav en lista av 
// produkter, som en användare har valt. Våran uppgift är att visa totalsumman samt hur mycket av det som 
// går till moms. Resultatet kan vi visa upp i ett objekt som innehåller totalSum och moms. 
const shoppingCart = [ 
    { 
        name: "T-Shirt", 
        price: 249, 
        quantity: 1 
    }, 
    { 
        name: "Keps", 
        price: 199, 
        quantity: 1 
    }, 
    { 
        name: "Strumpor", 
        price: 39, 
        quantity: 5 
    } 
] 

let totalSum = shoppingCart.reduce((sum, object) => sum + object.price * object.quantity, 0)
console.log(totalSum)

let VAT = totalSum * 0.25;

console.log(VAT)

// nedan skriver ut som objekt

const sumVAT = { 
    totalsum: totalSum,
    moms: VAT  
}

console.log(sumVAT)