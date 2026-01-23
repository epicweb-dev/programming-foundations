// Product Availability System
// Using booleans to track product status

const price: number = 29.99
const stockCount: number = 100

// 🐨 Create a variable `isAvailable` with type `boolean` set to `true`

// 🐨 Create a variable `isOnSale` with type `boolean` set to `false`

// 🐨 Create a variable `canPurchase` that's true when isAvailable AND stockCount > 0
// 💰 Use the && operator

// 🐨 Create a variable `isNotAvailable` that's the opposite of `isAvailable`
// 💰 Use the ! operator: !isAvailable

// ✅ Verification
// @ts-expect-error - 💣 remove this comment
console.log('Is Available:', isAvailable)
// @ts-expect-error - 💣 remove this comment
console.log('Is On Sale:', isOnSale)
// @ts-expect-error - 💣 remove this comment
console.log('Can Purchase:', canPurchase)
// @ts-expect-error - 💣 remove this comment
console.log('Is Not Available:', isNotAvailable)

// 🐨 Export your variables so we can verify your work
// export { isAvailable, isOnSale, hasDiscount, canPurchase, isNotAvailable }
