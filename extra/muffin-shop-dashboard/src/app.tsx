import './app.css'
import {
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
  type MemberStatus,
  type OrderItem,
  type PickupMethod,
} from './muffin-utils'

const shopName = 'Morning Muffins'
const customerName = 'Avery'
const memberStatus: MemberStatus = 'member'
const pickupMethod: PickupMethod = 'curbside'
const specialNote: string | null = null
const taxRate = 0.0825
const tipPercent = 0.12

const orderItems: OrderItem[] = [
  {
    name: 'Blueberry Muffin',
    price: 3.25,
    quantity: 2,
    isGlutenFree: false,
  },
  {
    name: 'Oatberry Muffin',
    price: 4.25,
    quantity: 1,
    isGlutenFree: true,
  },
  {
    name: 'Cold Brew',
    price: 4.5,
    quantity: 1,
    isGlutenFree: true,
  },
]

const subtotal = calculateSubtotal(orderItems)
const discount = calculateDiscount(subtotal, memberStatus)
const taxableAmount = subtotal - discount
const tax = calculateTax(taxableAmount, taxRate)
const tip = calculateTip(taxableAmount + tax, tipPercent)
const pickupFee = getPickupFee(pickupMethod)
const total = calculateTotal(subtotal, discount, tax, tip, pickupFee)

const pickupLabel = getPickupLabel(pickupMethod)
const noteLabel = formatNote(specialNote)

export function App() {
  logOrderReady(customerName)

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">Order summary</p>
          <h1>{shopName}</h1>
        </div>
        <div className="badge">
          <span>{memberStatus === 'member' ? 'Member pricing' : 'Guest order'}</span>
        </div>
      </header>

      <main className="layout">
        <section className="card">
          <h2>Items</h2>
          <ul className="line-items">
            {orderItems.map((item) => (
              <li key={item.name} className="line-item">
                <span>{buildLineItemText(item)}</span>
                <span>{formatMoney(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="note">
            <span>Special notes</span>
            <span>{noteLabel}</span>
          </div>
        </section>

        <section className="card summary">
          <h2>Totals</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatMoney(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span>-{formatMoney(discount)}</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>{formatMoney(tax)}</span>
          </div>
          <div className="summary-row">
            <span>Tip</span>
            <span>{formatMoney(tip)}</span>
          </div>
          <div className="summary-row">
            <span>Pickup fee</span>
            <span>{formatMoney(pickupFee)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatMoney(total)}</span>
          </div>
          <div className="pill">{pickupLabel}</div>
          <p className="helper">Customer: {customerName}</p>
        </section>
      </main>
    </div>
  )
}
