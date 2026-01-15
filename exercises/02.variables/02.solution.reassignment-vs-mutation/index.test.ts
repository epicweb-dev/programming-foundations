import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const person = JSON.parse(jsonLine.replace('Results JSON:', '').trim())

await test('person object should be mutated correctly', () => {
	assert.deepStrictEqual(
		person,
		{ name: 'Alice', age: 31, city: 'Portland' },
		'🚨 person should have age: 31 and city: "Portland" - mutate the object properties',
	)
})

await test('person age should be 31', () => {
	assert.strictEqual(
		person.age,
		31,
		'🚨 person.age should be 31 - change the age property from 30 to 31',
	)
})

await test('person city should be Portland', () => {
	assert.strictEqual(
		person.city,
		'Portland',
		'🚨 person.city should be "Portland" - change the city property',
	)
})
