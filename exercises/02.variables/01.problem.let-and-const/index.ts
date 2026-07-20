// Shopping Cart System
// Understanding when to use let vs const

// 🐨 Create a constant `TAX_RATE` set to 0.08 (8%)

// 🐨 Create a variable `cartTotal` using `let`, starting at 0

// 🐨 Create constants for product prices:
// - bookPrice is 15.99
// - muffinPrice is 4.5
// - laptopPrice is 999.99
// 💰 TypeScript doesn't know/care whether the number represents money or a
// count, so you don't use a dollar sign in the syntax

// 🐨 Add the book to the cart (update cartTotal)

// 🐨 Add the muffin to the cart (update cartTotal)
// 💰 Leave the laptop out of the cart for this exercise

// 🐨 Create `finalTotal` as cartTotal plus 8% tax using TAX_RATE

// 🐨 Try uncommenting the line below - what happens?
// TAX_RATE = 0.10

// Uncomment the following lines to see the results
// console.log('Cart subtotal:', cartTotal)
// console.log('Tax:', cartTotal * TAX_RATE)
// console.log('Final total:', finalTotal)

// 🐨 Export TAX_RATE, cartTotal, and finalTotal so we can verify your work
// export { TAX_RATE, cartTotal, finalTotal }
