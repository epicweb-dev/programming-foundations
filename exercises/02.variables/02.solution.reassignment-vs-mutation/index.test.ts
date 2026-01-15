import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('person is exported', () => {
	assert.ok(
		'person' in solution,
		'🚨 Make sure you export "person" - add: export { person }',
	)
})

await test('person object should be mutated correctly', () => {
	assert.deepStrictEqual(
		solution.person,
		{ name: 'Alice', age: 31, city: 'Portland' },
		'🚨 person should have age: 31 and city: "Portland" - mutate the object properties',
	)
})

await test('person age should be 31', () => {
	assert.strictEqual(
		solution.person.age,
		31,
		'🚨 person.age should be 31 - change the age property from 30 to 31',
	)
})

await test('person city should be Portland', () => {
	assert.strictEqual(
		solution.person.city,
		'Portland',
		'🚨 person.city should be "Portland" - change the city property',
	)
})
