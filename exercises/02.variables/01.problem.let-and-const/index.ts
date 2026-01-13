// Shopping Cart System
// Understanding when to use let vs const

// 🐨 Create a constant `TAX_RATE` set to 0.08 (8%)

// 🐨 Create a variable `cartTotal` using `let`, starting at 0

// Product prices
const bookPrice = 15.99
const coffeePrice = 4.5
const laptopPrice = 999.99

// 🐨 Add the book to the cart (update cartTotal)

// 🐨 Add the coffee to the cart (update cartTotal)

// 🐨 Calculate the final total with tax
// 💰 finalTotal = cartTotal + (cartTotal * TAX_RATE)

// 🐨 Try uncommenting the line below - what happens?
// TAX_RATE = 0.10

// @ts-expect-error - 💣 remove this comment
console.log('Cart subtotal:', cartTotal)
// console.log('Tax:', cartTotal * TAX_RATE)
// console.log('Final total:', finalTotal)

export {}
