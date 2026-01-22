type OrderItem = {
	name: string
	price: number
	quantity: number
	isGlutenFree: boolean
}

type MemberStatus = 'member' | 'guest'
type PickupMethod = 'counter' | 'curbside' | 'delivery'

function formatMoney(amount: number) {
	// 🐨 Return a string like `$4.5` using a template literal
	// 💰 return `$${amount}`
	return '$0'
}

function buildLineItemText(item: OrderItem) {
	// 🐨 Return a string like `2 x Blueberry Muffin (GF)`
	// 💰 Use item.quantity, item.name, and item.isGlutenFree
	let glutenFreeLabel = ''
	// 🐨 If item.isGlutenFree is true, set glutenFreeLabel to ' (GF)'
	return `${item.quantity} x ${item.name}${glutenFreeLabel}`
}

function calculateSubtotal(items: OrderItem[]) {
	// 🐨 Use a for loop to add each item total to subtotal
	// 💰 Use item.price * item.quantity inside the loop
	let subtotal = 0
	return subtotal
}

function calculateDiscount(subtotal: number, status: MemberStatus) {
	// 🐨 If status is 'member' and subtotal is at least 20,
	// return 10% of subtotal. Otherwise return 0.
	return 0
}

function calculateTax(taxableAmount: number, rate: number) {
	// 🐨 Return taxableAmount multiplied by rate
	return 0
}

function calculateTip(totalBeforeTip: number, percent: number) {
	// 🐨 Return totalBeforeTip multiplied by percent
	return 0
}

function calculateTotal(
	subtotal: number,
	discount: number,
	tax: number,
	tip: number,
	pickupFee: number,
) {
	// 🐨 Return the final total using subtotal, discount, tax, tip, and pickupFee
	return 0
}

function getPickupFee(method: PickupMethod) {
	// 🐨 Use a switch statement to return:
	// 'counter' -> 0
	// 'curbside' -> 3
	// 'delivery' -> 7
	return 0
}

function getPickupLabel(method: PickupMethod) {
	// 🐨 Return a label for the pickup method:
	// 'counter' -> 'Counter pickup'
	// 'curbside' -> 'Curbside pickup'
	// 'delivery' -> 'Delivery dropoff'
	// 💰 Use a switch statement with assertNever in the default case
	return method
}

function formatNote(note: string | null) {
	// 🐨 If note is null or an empty string, return 'No special notes'
	// otherwise return the note
	return note ?? ''
}

function logOrderReady(customer: string): void {
	// 🐨 Use console.log to print `Order ready for ${customer}`
}

function assertNever(value: never): never {
	// 🐨 Throw an error so TypeScript knows this never happens
	// 💰 throw new Error(`Unhandled case: ${value}`)
	throw new Error('Unhandled case')
}

export {
	assertNever,
	buildLineItemText,
	calculateDiscount,
	calculateSubtotal,
	calculateTax,
	calculateTip,
	calculateTotal,
	formatMoney,
	formatNote,
	getPickupFee,
	getPickupLabel,
	logOrderReady,
}
export type { MemberStatus, OrderItem, PickupMethod }
