import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { getFullName, parseAge, isValidEmail } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('getFullName should concatenate first and last name', () => {
	assert.strictEqual(
		getFullName[0],
		'John Doe',
		'🚨 getFullName("John", "Doe") should return "John Doe" - concatenate first and last name with a space',
	)
	assert.strictEqual(
		getFullName[1],
		'Jane Smith',
		'🚨 getFullName("Jane", "Smith") should return "Jane Smith" - concatenate first and last name with a space',
	)
})

await test('parseAge should parse age string to number', () => {
	assert.strictEqual(
		parseAge[0],
		25,
		'🚨 parseAge("25") should return 25 - convert the string to a number using Number() or parseInt()',
	)
	assert.strictEqual(
		parseAge[1],
		30,
		'🚨 parseAge("30") should return 30 - convert the string to a number using Number() or parseInt()',
	)
	assert.strictEqual(
		parseAge[2],
		18,
		'🚨 parseAge("18") should return 18 - convert the string to a number using Number() or parseInt()',
	)
})

await test('isValidEmail should return true for valid emails', () => {
	assert.strictEqual(
		isValidEmail[0],
		true,
		'🚨 isValidEmail("test@example.com") should return true - check if the string includes "@"',
	)
	assert.strictEqual(
		isValidEmail[1],
		true,
		'🚨 isValidEmail("user@domain.co.uk") should return true - check if the string includes "@"',
	)
})

await test('isValidEmail should return false for invalid emails', () => {
	assert.strictEqual(
		isValidEmail[2],
		false,
		'🚨 isValidEmail("invalid-email") should return false - check if the string does not include "@"',
	)
	assert.strictEqual(
		isValidEmail[3],
		false,
		'🚨 isValidEmail("no-at-sign") should return false - check if the string does not include "@"',
	)
})
