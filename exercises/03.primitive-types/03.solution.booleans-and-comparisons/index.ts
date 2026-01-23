// Product Availability System
// Using booleans to track product status

const stockCount: number = 100

const isAvailable: boolean = true

const canPurchase: boolean = isAvailable && stockCount > 0

const isNotAvailable: boolean = !isAvailable

// ✅ Verification
console.log('Is Available:', isAvailable)
console.log('Can Purchase:', canPurchase)
console.log('Is Not Available:', isNotAvailable)

export { isAvailable, canPurchase, isNotAvailable }
