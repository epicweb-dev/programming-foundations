import { testStep, expect } from '@epic-web/workshop-utils/test'
import { multiply, divide, isEven } from './index.ts'

await testStep('multiply should multiply two numbers', async () => {
	expect(multiply(4, 5)).toBe(20)
	expect(multiply(3, 7)).toBe(21)
	expect(multiply(-2, 4)).toBe(-8)
})

await testStep('divide should divide two numbers', async () => {
	expect(divide(10, 2)).toBe(5)
	expect(divide(15, 3)).toBe(5)
	expect(divide(7, 2)).toBeCloseTo(3.5, 1)
})

await testStep('divide should throw error when dividing by zero', async () => {
	expect(() => divide(10, 0)).toThrow('Cannot divide by zero')
})

await testStep('isEven should return true for even numbers', async () => {
	expect(isEven(4)).toBe(true)
	expect(isEven(2)).toBe(true)
	expect(isEven(0)).toBe(true)
})

await testStep('isEven should return false for odd numbers', async () => {
	expect(isEven(7)).toBe(false)
	expect(isEven(3)).toBe(false)
	expect(isEven(1)).toBe(false)
})
