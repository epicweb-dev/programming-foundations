// Product Availability System
// Using booleans to track product status

const price: number = 29.99
const stockCount: number = 100

const isAvailable: boolean = true

const hasDiscount: boolean = price < 50

const canPurchase: boolean = isAvailable && stockCount > 0

const isNotAvailable: boolean = !isAvailable

// ✅ Verification
console.log('Is Available:', isAvailable)
console.log('Has Discount:', hasDiscount)
console.log('Can Purchase:', canPurchase)
console.log('Is Not Available:', isNotAvailable)

export { isAvailable, hasDiscount, canPurchase, isNotAvailable }
