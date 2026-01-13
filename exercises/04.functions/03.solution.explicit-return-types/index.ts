// Functions with Explicit Return Types
// Practicing clear function contracts

function getFullName(firstName: string, lastName: string): string {
	return `${firstName} ${lastName}`
}

function parseAge(ageString: string): number {
	return parseInt(ageString, 10)
}

function isValidEmail(email: string): boolean {
	return email.includes('@')
}

// ✅ Test your functions
console.log(getFullName('John', 'Doe')) // "John Doe"
console.log(parseAge('25')) // 25
console.log(isValidEmail('test@example.com')) // true
console.log(isValidEmail('invalid-email')) // false

export {}
