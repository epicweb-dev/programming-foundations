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

// 🐨 Create a variable `hasUsername` based on the truthiness of `username`
// 💰 Use Boolean(username) or !!username

// 🐨 Create a variable `hasNickname` based on the truthiness of `nickname`

// 🐨 Create a variable `hasAge` based on the truthiness of `age`

// 🐨 Create a variable `hasNotes` based on the truthiness of `notes`

// 🐨 Create a variable `canCheckout` that is true when cartTotal is truthy AND
// hasAcceptedTerms is true

// 🐨 Create a variable `canCreateAccount` that is true when hasUsername, email,
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

// 🐨 Export your variables so we can verify your work
// export { hasUsername, hasNickname, hasAge, hasNotes, canCheckout, canCreateAccount }
