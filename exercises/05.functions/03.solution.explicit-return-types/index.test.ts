import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getFullName, parseAge, isValidEmail } from './index.ts'

await test('getFullName should concatenate first and last name', () => {
	assert.strictEqual(
		getFullName('John', 'Doe'),
		'John Doe',
		'🚨 getFullName("John", "Doe") should return "John Doe" - concatenate first and last name with a space',
	)
	assert.strictEqual(
		getFullName('Jane', 'Smith'),
		'Jane Smith',
		'🚨 getFullName("Jane", "Smith") should return "Jane Smith" - concatenate first and last name with a space',
	)
})

await test('parseAge should parse age string to number', () => {
	assert.strictEqual(
		parseAge('25'),
		25,
		'🚨 parseAge("25") should return 25 - convert the string to a number using Number() or parseInt()',
	)
	assert.strictEqual(
		parseAge('30'),
		30,
		'🚨 parseAge("30") should return 30 - convert the string to a number using Number() or parseInt()',
	)
	assert.strictEqual(
		parseAge('18'),
		18,
		'🚨 parseAge("18") should return 18 - convert the string to a number using Number() or parseInt()',
	)
})

await test('isValidEmail should return true for valid emails', () => {
	assert.strictEqual(
		isValidEmail('test@example.com'),
		true,
		'🚨 isValidEmail("test@example.com") should return true - check if the string includes "@"',
	)
	assert.strictEqual(
		isValidEmail('user@domain.co.uk'),
		true,
		'🚨 isValidEmail("user@domain.co.uk") should return true - check if the string includes "@"',
	)
})

await test('isValidEmail should return false for invalid emails', () => {
	assert.strictEqual(
		isValidEmail('invalid-email'),
		false,
		'🚨 isValidEmail("invalid-email") should return false - check if the string does not include "@"',
	)
	assert.strictEqual(
		isValidEmail('no-at-sign'),
		false,
		'🚨 isValidEmail("no-at-sign") should return false - check if the string does not include "@"',
	)
})
