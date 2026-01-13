import { testStep, expect } from '@epic-web/workshop-utils/test'
import { getFullName, parseAge, isValidEmail } from './index.ts'

await testStep('getFullName should concatenate first and last name', async () => {
	expect(getFullName('John', 'Doe'), '🚨 getFullName("John", "Doe") should return "John Doe" - concatenate first and last name with a space').toBe('John Doe')
	expect(getFullName('Jane', 'Smith'), '🚨 getFullName("Jane", "Smith") should return "Jane Smith" - concatenate first and last name with a space').toBe('Jane Smith')
})

await testStep('parseAge should parse age string to number', async () => {
	expect(parseAge('25'), '🚨 parseAge("25") should return 25 - convert the string to a number using Number() or parseInt()').toBe(25)
	expect(parseAge('30'), '🚨 parseAge("30") should return 30 - convert the string to a number using Number() or parseInt()').toBe(30)
	expect(parseAge('18'), '🚨 parseAge("18") should return 18 - convert the string to a number using Number() or parseInt()').toBe(18)
})

await testStep('isValidEmail should return true for valid emails', async () => {
	expect(isValidEmail('test@example.com'), '🚨 isValidEmail("test@example.com") should return true - check if the string includes "@"').toBe(true)
	expect(isValidEmail('user@domain.co.uk'), '🚨 isValidEmail("user@domain.co.uk") should return true - check if the string includes "@"').toBe(true)
})

await testStep('isValidEmail should return false for invalid emails', async () => {
	expect(isValidEmail('invalid-email'), '🚨 isValidEmail("invalid-email") should return false - check if the string does not include "@"').toBe(false)
	expect(isValidEmail('no-at-sign'), '🚨 isValidEmail("no-at-sign") should return false - check if the string does not include "@"').toBe(false)
})
