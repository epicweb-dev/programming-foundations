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
	// 💰 Use a template literal to format the amount with a $ prefix
	return '$0'
}

function buildLineItemText(item: OrderItem) {
	// 🐨 Return a string like `2 x Blueberry Muffin (GF)`
	// 💰 Build the string from the item fields
	let glutenFreeLabel = ''
	// 🐨 If item.isGlutenFree is true, set glutenFreeLabel to ' (GF)'
	return `${item.quantity} x ${item.name}${glutenFreeLabel}`
}

function calculateSubtotal(items: OrderItem[]) {
	// 🐨 Use a for loop to add each item total to subtotal
	// 💰 Multiply each item's price by its quantity
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
	// 💰 Use a switch statement and handle the unexpected case
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
	// 💰 Throw an Error that mentions the unexpected value
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
