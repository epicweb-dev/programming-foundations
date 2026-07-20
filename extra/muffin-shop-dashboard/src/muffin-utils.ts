type OrderItem = {
	name: string
	price: number
	quantity: number
	isGlutenFree: boolean
}

type MemberStatus = 'member' | 'guest'
type PickupMethod = 'counter' | 'curbside' | 'delivery'

function formatMoney(amount: number) {
	// 🐨 Format amount with a leading "$" (e.g. 4.5 → "$4.5")
	return '$0'
}

function buildLineItemText(item: OrderItem) {
	// 🐨 Return "quantity x name", plus " (GF)" when the item is gluten-free
	// Examples: "2 x Blueberry Muffin", "1 x Oatberry Muffin (GF)"
	void item
	return ''
}

function calculateSubtotal(items: OrderItem[]) {
	// 🐨 Loop items and sum each line total (price × quantity)
	let subtotal = 0
	return subtotal
}

function calculateDiscount(subtotal: number, status: MemberStatus) {
	// 🐨 Members get 10% off when subtotal is at least 20; otherwise 0
	return 0
}

function calculateTax(taxableAmount: number, rate: number) {
	// 🐨 Return the tax for this amount and rate
	return 0
}

function calculateTip(totalBeforeTip: number, percent: number) {
	// 🐨 Return the tip for this amount and percent
	return 0
}

function calculateTotal(
	subtotal: number,
	discount: number,
	tax: number,
	tip: number,
	pickupFee: number,
) {
	// 🐨 Combine subtotal, discount, tax, tip, and pickupFee into the final total
	return 0
}

function getPickupFee(method: PickupMethod) {
	// 🐨 Switch: counter → 0, curbside → 3, delivery → 7
	return 0
}

function getPickupLabel(method: PickupMethod) {
	// 🐨 Switch labels:
	// counter → 'Counter pickup'
	// curbside → 'Curbside pickup'
	// delivery → 'Delivery dropoff'
	// 💰 Handle impossible cases with assertNever
	return method
}

function formatNote(note: string | null) {
	// 🐨 null or '' → 'No special notes'; otherwise return the note
	return note ?? ''
}

function logOrderReady(customer: string): void {
	// 🐨 Log: Order ready for <customer>
}

function assertNever(value: never): never {
	// 🐨 Throw an Error that includes the unexpected value
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
