import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	double,
	greet,
	calculateTotal,
	isEven,
	processNumbers,
} from './index.ts'

await testStep('double should be an arrow function', async () => {
	expect(
		double.toString().includes('=>'),
		'🚨 double should be an arrow function - use const double = (n: number): number => ...',
	).toBe(true)
	expect(double(5), '🚨 double(5) should return 10').toBe(10)
	expect(double(0), '🚨 double(0) should return 0').toBe(0)
	expect(double(-3), '🚨 double(-3) should return -6').toBe(-6)
})

await testStep('greet should be an arrow function', async () => {
	expect(
		greet.toString().includes('=>'),
		'🚨 greet should be an arrow function - use const greet = (name: string): string => ...',
	).toBe(true)
	expect(
		greet('Alice'),
		'🚨 greet("Alice") should return "Hello, Alice!"',
	).toBe('Hello, Alice!')
	expect(greet('Bob'), '🚨 greet("Bob") should return "Hello, Bob!"').toBe(
		'Hello, Bob!',
	)
})

await testStep('calculateTotal should be an arrow function', async () => {
	expect(
		calculateTotal.toString().includes('=>'),
		'🚨 calculateTotal should be an arrow function',
	).toBe(true)
	expect(
		calculateTotal([10, 20, 30], 0.1),
		'🚨 calculateTotal([10, 20, 30], 0.1) should return 66 - sum prices and add tax',
	).toBe(66)
	expect(
		calculateTotal([100], 0.05),
		'🚨 calculateTotal([100], 0.05) should return 105',
	).toBe(105)
})

await testStep('isEven should be an arrow function', async () => {
	expect(
		isEven.toString().includes('=>'),
		'🚨 isEven should be an arrow function with implicit return',
	).toBe(true)
	expect(isEven(4), '🚨 isEven(4) should return true').toBe(true)
	expect(isEven(7), '🚨 isEven(7) should return false').toBe(false)
	expect(isEven(0), '🚨 isEven(0) should return true').toBe(true)
})

await testStep(
	'processNumbers should use arrow function callbacks',
	async () => {
		const result = processNumbers([1, 2, 3, 4, 5])

		expect(
			JSON.stringify(result.doubled),
			'🚨 doubled should be [2, 4, 6, 8, 10] - use map with arrow function',
		).toBe(JSON.stringify([2, 4, 6, 8, 10]))

		expect(
			JSON.stringify(result.evens),
			'🚨 evens should be [2, 4] - use filter with arrow function',
		).toBe(JSON.stringify([2, 4]))

		expect(
			result.sum,
			'🚨 sum should be 15 - use reduce with arrow function',
		).toBe(15)
	},
)
