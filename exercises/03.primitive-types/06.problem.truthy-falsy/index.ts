// Account and Checkout Status
// Using truthy and falsy values to drive decisions

const username = 'kent'
const nickname = ''
const age = 0
const email = 'kent@epicweb.dev'
const password = ''
const notes = undefined
const cartTotal = 42
const hasAcceptedTerms = false

// 🐨 Create `hasUsername` as a boolean based on the truthiness of `username`

// 🐨 Create `hasNickname` as a boolean based on the truthiness of `nickname`

// 🐨 Create `hasAge` as a boolean based on the truthiness of `age`

// 🐨 Create `hasNotes` as a boolean based on the truthiness of `notes`

// 🐨 Create `canCheckout` that is true when cartTotal is truthy AND
// hasAcceptedTerms is true

// 🐨 Create `canCreateAccount` that is true when hasUsername, email,
// and password are all truthy

// ✅ Verification
// @ts-expect-error - 💣 remove this comment
console.log('Has username:', hasUsername)
// @ts-expect-error - 💣 remove this comment
console.log('Has nickname:', hasNickname)
// @ts-expect-error - 💣 remove this comment
console.log('Has age:', hasAge)
// @ts-expect-error - 💣 remove this comment
console.log('Has notes:', hasNotes)
// @ts-expect-error - 💣 remove this comment
console.log('Can checkout:', canCheckout)
// @ts-expect-error - 💣 remove this comment
console.log('Can create account:', canCreateAccount)

// 🐨 Export hasUsername, hasNickname, hasAge, hasNotes, canCheckout, canCreateAccount
// export { hasUsername, hasNickname, hasAge, hasNotes, canCheckout, canCreateAccount }
