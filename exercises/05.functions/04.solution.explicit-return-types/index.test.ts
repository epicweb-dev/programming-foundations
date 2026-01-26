import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('getFullName is exported', () => {
	assert.ok(
		'getFullName' in solution,
		'🚨 Make sure you export "getFullName" - add: export { getFullName, ... }',
	)
})

await test('getFullName should concatenate first and last name', () => {
	assert.strictEqual(
		solution.getFullName('John', 'Doe'),
		'John Doe',
		'🚨 getFullName("John", "Doe") should return "John Doe" - concatenate first and last name with a space',
	)
	assert.strictEqual(
		solution.getFullName('Jane', 'Smith'),
		'Jane Smith',
		'🚨 getFullName("Jane", "Smith") should return "Jane Smith" - concatenate first and last name with a space',
	)
})

await test('parseAge is exported', () => {
	assert.ok(
		'parseAge' in solution,
		'🚨 Make sure you export "parseAge" - add: export { getFullName, parseAge, ... }',
	)
})

await test('parseAge should parse age string to number', () => {
	assert.strictEqual(
		solution.parseAge('25'),
		25,
		'🚨 parseAge("25") should return 25 - convert the string to a number using Number() or parseInt()',
	)
	assert.strictEqual(
		solution.parseAge('30'),
		30,
		'🚨 parseAge("30") should return 30 - convert the string to a number using Number() or parseInt()',
	)
	assert.strictEqual(
		solution.parseAge('18'),
		18,
		'🚨 parseAge("18") should return 18 - convert the string to a number using Number() or parseInt()',
	)
})

await test('isValidEmail is exported', () => {
	assert.ok(
		'isValidEmail' in solution,
		'🚨 Make sure you export "isValidEmail" - add: export { getFullName, parseAge, isValidEmail }',
	)
})

await test('isValidEmail should return true for valid emails', () => {
	assert.strictEqual(
		solution.isValidEmail('test@example.com'),
		true,
		'🚨 isValidEmail("test@example.com") should return true - check if the string includes "@"',
	)
	assert.strictEqual(
		solution.isValidEmail('user@domain.co.uk'),
		true,
		'🚨 isValidEmail("user@domain.co.uk") should return true - check if the string includes "@"',
	)
})

await test('isValidEmail should return false for invalid emails', () => {
	assert.strictEqual(
		solution.isValidEmail('invalid-email'),
		false,
		'🚨 isValidEmail("invalid-email") should return false - check if the string does not include "@"',
	)
	assert.strictEqual(
		solution.isValidEmail('no-at-sign'),
		false,
		'🚨 isValidEmail("no-at-sign") should return false - check if the string does not include "@"',
	)
})
