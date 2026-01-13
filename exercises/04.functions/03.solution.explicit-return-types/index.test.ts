import { testStep, expect } from '@epic-web/workshop-utils/test'
import { getFullName, parseAge, isValidEmail } from './index.ts'

await testStep('getFullName should concatenate first and last name', async () => {
	expect(getFullName('John', 'Doe')).toBe('John Doe')
	expect(getFullName('Jane', 'Smith')).toBe('Jane Smith')
})

await testStep('parseAge should parse age string to number', async () => {
	expect(parseAge('25')).toBe(25)
	expect(parseAge('30')).toBe(30)
	expect(parseAge('18')).toBe(18)
})

await testStep('isValidEmail should return true for valid emails', async () => {
	expect(isValidEmail('test@example.com')).toBe(true)
	expect(isValidEmail('user@domain.co.uk')).toBe(true)
})

await testStep('isValidEmail should return false for invalid emails', async () => {
	expect(isValidEmail('invalid-email')).toBe(false)
	expect(isValidEmail('no-at-sign')).toBe(false)
})
