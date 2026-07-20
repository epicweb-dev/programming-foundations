// Muffin Shop Checkout
// Build a simple receipt for a muffin shop order.

const shopName = 'Morning Muffins'
const customerName = 'Avery'
const isMember = true
const muffinCount = 3
const sconeCount = 2
const muffinPrice = 3.25
const sconePrice = 4
const tipPercent = 0.15
const taxRate = 0.0825
const pickupMethod = 'counter'

function buildDivider(char: string, length: number) {
	// 🐨 Return a string made by repeating `char` exactly `length` times
	let line = ''
	return line
}

function formatMoney(amount: number) {
	// 🐨 Format amount with a leading "$" (e.g. 3.25 → "$3.25", 4 → "$4")
	return '$0'
}

function calculateDiscount(subtotal: number, member: boolean) {
	// 🐨 Members get 10% off when subtotal is at least 15; otherwise 0
	return 0
}

function calculateTax(subtotal: number, rate: number) {
	// 🐨 Return the tax for this amount and rate
	return 0
}

function calculateTip(totalBeforeTip: number, percent: number) {
	// 🐨 Return the tip for this amount and percent
	return 0
}

function calculatePickupFee(method: string) {
	// 🐨 Use a switch: counter → 0, curbside → 3, delivery → 7
	return 0
}

let subtotal = 0
// 🐨 Set subtotal from the muffin and scone counts and prices

const discount = calculateDiscount(subtotal, isMember)
const taxableAmount = subtotal - discount
const tax = calculateTax(taxableAmount, taxRate)
const tip = calculateTip(taxableAmount + tax, tipPercent)
const pickupFee = calculatePickupFee(pickupMethod)

let pickupLabel = ''
// 🐨 FREE when pickupFee is 0; otherwise formatMoney(pickupFee)

let memberMessage = ''
// 🐨 Members: 'Member discount applied'
// Guests: 'Join the club for 10% off'

let total = 0
// 🐨 Combine subtotal, discount, tax, tip, and pickupFee into the final total

const header = buildDivider('=', 32)
const divider = buildDivider('-', 32)

const receipt =
	`${header}\n` +
	`${shopName}\n` +
	`Order for ${customerName}\n` +
	`${divider}\n` +
	`Muffins: ${muffinCount} x ${formatMoney(muffinPrice)}\n` +
	`Scones: ${sconeCount} x ${formatMoney(sconePrice)}\n` +
	`${divider}\n` +
	`Subtotal: ${formatMoney(subtotal)}\n` +
	`Discount: -${formatMoney(discount)}\n` +
	`Tax: ${formatMoney(tax)}\n` +
	`Tip: ${formatMoney(tip)}\n` +
	`Pickup fee: ${pickupLabel}\n` +
	`${divider}\n` +
	`Total: ${formatMoney(total)}\n` +
	`${memberMessage}\n` +
	`${header}`

console.log(receipt)

export { receipt }
