// Coffee Cart Checkout
// Build a simple receipt for a coffee cart order.

const shopName = 'Bean & Birch'
const customerName = 'Avery'
const isMember = true
const drinkCount = 2
const pastryCount = 1
const drinkPrice = 4.5
const pastryPrice = 3.25
const tipPercent = 0.15
const taxRate = 0.0825
const shippingSpeed = 'standard'

function buildDivider(char: string, length: number) {
  // 🐨 Build and return a divider string by repeating char
  // 💰 Start with let line = '' and add char in a for loop
  let line = ''
  return line
}

function formatMoney(amount: number) {
  // 🐨 Return a string like `$4.5` using a template literal
  return `$${amount}`
}

function calculateDiscount(subtotal: number, member: boolean) {
  // 🐨 If the customer is a member and subtotal is at least 15,
  // return 10% of subtotal. Otherwise return 0.
  return 0
}

function calculateTax(subtotal: number, rate: number) {
  // 🐨 Return subtotal multiplied by rate
  return 0
}

function calculateTip(totalBeforeTip: number, percent: number) {
  // 🐨 Return totalBeforeTip multiplied by percent
  return 0
}

function calculateShipping(speed: string) {
  // 🐨 Use a switch statement to return:
  // 'pickup' -> 0
  // 'standard' -> 5
  // 'express' -> 15
  return 0
}

let subtotal = 0
// 🐨 Set subtotal using item counts and prices
// 💰 (drinkCount * drinkPrice) + (pastryCount * pastryPrice)

const discount = calculateDiscount(subtotal, isMember)
const taxableAmount = subtotal - discount
const tax = calculateTax(taxableAmount, taxRate)
const tip = calculateTip(taxableAmount + tax, tipPercent)
const shipping = calculateShipping(shippingSpeed)

let shippingLabel = ''
// 🐨 If shipping is 0, set shippingLabel to 'FREE'
// otherwise set it to formatMoney(shipping)

let memberMessage = ''
// 🐨 If isMember is true, set memberMessage to 'Member discount applied'
// otherwise set it to 'Join the club for 10% off'

let total = 0
// 🐨 Set total using subtotal, discount, tax, tip, and shipping

const header = buildDivider('=', 32)
const divider = buildDivider('-', 32)

const receipt =
  `${header}\n` +
  `${shopName}\n` +
  `Order for ${customerName}\n` +
  `${divider}\n` +
  `Drinks: ${drinkCount} x ${formatMoney(drinkPrice)}\n` +
  `Pastries: ${pastryCount} x ${formatMoney(pastryPrice)}\n` +
  `${divider}\n` +
  `Subtotal: ${formatMoney(subtotal)}\n` +
  `Discount: -${formatMoney(discount)}\n` +
  `Tax: ${formatMoney(tax)}\n` +
  `Tip: ${formatMoney(tip)}\n` +
  `Shipping: ${shippingLabel}\n` +
  `${divider}\n` +
  `Total: ${formatMoney(total)}\n` +
  `${memberMessage}\n` +
  `${header}`

console.log(receipt)

export { receipt }
