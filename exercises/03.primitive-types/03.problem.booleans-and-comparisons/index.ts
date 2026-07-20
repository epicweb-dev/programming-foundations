// Product Availability System
// Using booleans to track product status

const price: number = 29.99
const stockCount: number = 100

// 🐨 Create a variable `isAvailable` with type `boolean` set to `true`

// 🐨 Create a variable `hasDiscount` that's true when price is under 50

// 🐨 Create a variable `canPurchase` that's true when isAvailable AND stockCount > 0

// 🐨 Create a variable `isNotAvailable` that's the opposite of `isAvailable`

// ✅ Verification
// @ts-expect-error - 💣 remove this comment
console.log('Is Available:', isAvailable)
// @ts-expect-error - 💣 remove this comment
console.log('Has Discount:', hasDiscount)
// @ts-expect-error - 💣 remove this comment
console.log('Can Purchase:', canPurchase)
// @ts-expect-error - 💣 remove this comment
console.log('Is Not Available:', isNotAvailable)

// 🐨 Export isAvailable, hasDiscount, canPurchase, and isNotAvailable
// export { isAvailable, hasDiscount, canPurchase, isNotAvailable }
