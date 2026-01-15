// Functions with Explicit Return Types
// Practicing clear function contracts

// 🐨 Create `getFullName` that takes firstName and lastName (both strings)
// and returns a string with explicit return type
// 💰 function getFullName(firstName: string, lastName: string): string

// 🐨 Create `parseAge` that takes ageString (string)
// and returns a number with explicit return type
// 💰 Use parseInt(ageString, 10)

// 🐨 Create `isValidEmail` that takes email (string)
// and returns a boolean with explicit return type
// 💰 Check if email.includes('@')

// ✅ Test your functions
// console.log(getFullName('John', 'Doe')) // "John Doe"
// console.log(parseAge('25')) // 25
// console.log(isValidEmail('test@example.com')) // true
// console.log(isValidEmail('invalid-email')) // false

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		getFullName: [getFullName('John', 'Doe'), getFullName('Jane', 'Smith')],
// 		parseAge: [parseAge('25'), parseAge('30'), parseAge('18')],
// 		isValidEmail: [
// 			isValidEmail('test@example.com'),
// 			isValidEmail('user@domain.co.uk'),
// 			isValidEmail('invalid-email'),
// 			isValidEmail('no-at-sign'),
// 		],
// 	}),
// )
