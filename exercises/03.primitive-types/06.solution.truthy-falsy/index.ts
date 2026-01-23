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

const hasUsername = Boolean(username)
const hasNickname = Boolean(nickname)
const hasAge = Boolean(age)
const hasNotes = Boolean(notes)
const canCheckout = Boolean(cartTotal) && hasAcceptedTerms
const canCreateAccount = hasUsername && Boolean(email) && Boolean(password)

// ✅ Verification
console.log('Has username:', hasUsername)
console.log('Has nickname:', hasNickname)
console.log('Has age:', hasAge)
console.log('Has notes:', hasNotes)
console.log('Can checkout:', canCheckout)
console.log('Can create account:', canCreateAccount)

export {
	hasUsername,
	hasNickname,
	hasAge,
	hasNotes,
	canCheckout,
	canCreateAccount,
}
