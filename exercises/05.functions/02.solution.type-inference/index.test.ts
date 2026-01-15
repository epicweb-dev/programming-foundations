import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { multiply, divide, divideError, isEven } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('multiply should multiply two numbers', () => {
	assert.strictEqual(
		multiply[0],
		20,
		'🚨 multiply(4, 5) should return 20 - multiply the two parameters together',
	)
	assert.strictEqual(
		multiply[1],
		21,
		'🚨 multiply(3, 7) should return 21 - multiply the two parameters together',
	)
	assert.strictEqual(
		multiply[2],
		-8,
		'🚨 multiply(-2, 4) should return -8 - multiply the two parameters together',
	)
})

await test('divide should divide two numbers', () => {
	assert.strictEqual(
		divide[0],
		5,
		'🚨 divide(10, 2) should return 5 - divide the first parameter by the second',
	)
	assert.strictEqual(
		divide[1],
		5,
		'🚨 divide(15, 3) should return 5 - divide the first parameter by the second',
	)
	assert.ok(
		Math.abs(divide[2] - 3.5) < Math.pow(10, -1),
		'🚨 divide(7, 2) should return 3.5 - divide the first parameter by the second',
	)
})

await test('divide should throw error when dividing by zero', () => {
	assert.strictEqual(
		divideError,
		'Cannot divide by zero',
		'🚨 divide(10, 0) should throw "Cannot divide by zero" - check if the divisor is 0 and throw an error',
	)
})

await test('isEven should return true for even numbers', () => {
	assert.strictEqual(
		isEven[0],
		true,
		'🚨 isEven(4) should return true - check if the number modulo 2 equals 0',
	)
	assert.strictEqual(
		isEven[1],
		true,
		'🚨 isEven(2) should return true - check if the number modulo 2 equals 0',
	)
	assert.strictEqual(
		isEven[2],
		true,
		'🚨 isEven(0) should return true - check if the number modulo 2 equals 0',
	)
})

await test('isEven should return false for odd numbers', () => {
	assert.strictEqual(
		isEven[3],
		false,
		'🚨 isEven(7) should return false - check if the number modulo 2 does not equal 0',
	)
	assert.strictEqual(
		isEven[4],
		false,
		'🚨 isEven(3) should return false - check if the number modulo 2 does not equal 0',
	)
	assert.strictEqual(
		isEven[5],
		false,
		'🚨 isEven(1) should return false - check if the number modulo 2 does not equal 0',
	)
})
