// Comparison Operators
// Understanding equality and inequality in JavaScript/TypeScript

const price = 100
const quantity = '100'

// @ts-expect-error - TypeScript warns about comparing different types (that's the point!)
const looseEqual = price == quantity

// @ts-expect-error - TypeScript warns about comparing different types (that's the point!)
const strictEqual = price === quantity

console.log('Loose equality (==):', looseEqual)
console.log('Strict equality (===):', strictEqual)

const a = 10
const b = 20

const notEqualLoose = a != b

const notEqualStrict = a !== b

const isGreater = b > a

const isLessOrEqual = a <= b

console.log('a != b:', notEqualLoose)
console.log('a !== b:', notEqualStrict)
console.log('b > a:', isGreater)
console.log('a <= b:', isLessOrEqual)

export {
	looseEqual,
	strictEqual,
	notEqualLoose,
	notEqualStrict,
	isGreater,
	isLessOrEqual,
}
