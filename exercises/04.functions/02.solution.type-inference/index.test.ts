import { testStep, expect } from '@epic-web/workshop-utils/test'
import { multiply, divide, isEven } from './index.ts'

await testStep('multiply should multiply two numbers', async () => {
	expect(
		multiply(4, 5),
		'🚨 multiply(4, 5) should return 20 - multiply the two parameters together',
	).toBe(20)
	expect(
		multiply(3, 7),
		'🚨 multiply(3, 7) should return 21 - multiply the two parameters together',
	).toBe(21)
	expect(
		multiply(-2, 4),
		'🚨 multiply(-2, 4) should return -8 - multiply the two parameters together',
	).toBe(-8)
})

await testStep('divide should divide two numbers', async () => {
	expect(
		divide(10, 2),
		'🚨 divide(10, 2) should return 5 - divide the first parameter by the second',
	).toBe(5)
	expect(
		divide(15, 3),
		'🚨 divide(15, 3) should return 5 - divide the first parameter by the second',
	).toBe(5)
	expect(
		divide(7, 2),
		'🚨 divide(7, 2) should return 3.5 - divide the first parameter by the second',
	).toBeCloseTo(3.5, 1)
})

await testStep('divide should throw error when dividing by zero', async () => {
	expect(
		() => divide(10, 0),
		'🚨 divide(10, 0) should throw "Cannot divide by zero" - check if the divisor is 0 and throw an error',
	).toThrow('Cannot divide by zero')
})

await testStep('isEven should return true for even numbers', async () => {
	expect(
		isEven(4),
		'🚨 isEven(4) should return true - check if the number modulo 2 equals 0',
	).toBe(true)
	expect(
		isEven(2),
		'🚨 isEven(2) should return true - check if the number modulo 2 equals 0',
	).toBe(true)
	expect(
		isEven(0),
		'🚨 isEven(0) should return true - check if the number modulo 2 equals 0',
	).toBe(true)
})

await testStep('isEven should return false for odd numbers', async () => {
	expect(
		isEven(7),
		'🚨 isEven(7) should return false - check if the number modulo 2 does not equal 0',
	).toBe(false)
	expect(
		isEven(3),
		'🚨 isEven(3) should return false - check if the number modulo 2 does not equal 0',
	).toBe(false)
	expect(
		isEven(1),
		'🚨 isEven(1) should return false - check if the number modulo 2 does not equal 0',
	).toBe(false)
})
