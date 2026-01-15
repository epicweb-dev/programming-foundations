// Product Availability System
// Using booleans to track product status

const price: number = 29.99
const stockCount: number = 100

const isAvailable: boolean = true

const isOnSale: boolean = false

const hasDiscount: boolean = price < 50

const canPurchase: boolean = isAvailable && stockCount > 0

// ✅ Verification
console.log('Is Available:', isAvailable)
console.log('Is On Sale:', isOnSale)
console.log('Has Discount:', hasDiscount)
console.log('Can Purchase:', canPurchase)

export { isAvailable, isOnSale, hasDiscount, canPurchase }
