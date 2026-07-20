import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('hasUsername is exported', () => {
	assert.ok(
		'hasUsername' in solution,
		'🚨 Make sure you export "hasUsername" - add: export { hasUsername, ... }',
	)
})

await test('hasUsername should be true', () => {
	assert.strictEqual(
		typeof solution.hasUsername,
		'boolean',
		'🚨 hasUsername should be a boolean based on the truthiness of username',
	)
	assert.strictEqual(
		solution.hasUsername,
		true,
		'🚨 hasUsername should be true when username is a non-empty string',
	)
})

await test('hasNickname is exported', () => {
	assert.ok(
		'hasNickname' in solution,
		'🚨 Make sure you export "hasNickname" - add: export { ..., hasNickname, ... }',
	)
})

await test('hasNickname should be false', () => {
	assert.strictEqual(
		typeof solution.hasNickname,
		'boolean',
		'🚨 hasNickname should be a boolean based on the truthiness of nickname',
	)
	assert.strictEqual(
		solution.hasNickname,
		false,
		'🚨 hasNickname should be false when nickname is an empty string',
	)
})

await test('hasAge is exported', () => {
	assert.ok(
		'hasAge' in solution,
		'🚨 Make sure you export "hasAge" - add: export { ..., hasAge, ... }',
	)
})

await test('hasAge should be false', () => {
	assert.strictEqual(
		typeof solution.hasAge,
		'boolean',
		'🚨 hasAge should be a boolean based on the truthiness of age',
	)
	assert.strictEqual(
		solution.hasAge,
		false,
		'🚨 hasAge should be false when age is 0',
	)
})

await test('hasNotes is exported', () => {
	assert.ok(
		'hasNotes' in solution,
		'🚨 Make sure you export "hasNotes" - add: export { ..., hasNotes, ... }',
	)
})

await test('hasNotes should be false', () => {
	assert.strictEqual(
		typeof solution.hasNotes,
		'boolean',
		'🚨 hasNotes should be a boolean based on the truthiness of notes',
	)
	assert.strictEqual(
		solution.hasNotes,
		false,
		'🚨 hasNotes should be false when notes is undefined',
	)
})

await test('canCheckout is exported', () => {
	assert.ok(
		'canCheckout' in solution,
		'🚨 Make sure you export "canCheckout" - add: export { ..., canCheckout, ... }',
	)
})

await test('canCheckout should be false', () => {
	assert.strictEqual(
		typeof solution.canCheckout,
		'boolean',
		'🚨 canCheckout should be a boolean',
	)
	assert.strictEqual(
		solution.canCheckout,
		false,
		'🚨 canCheckout should be false when terms are not accepted',
	)
})

await test('canCreateAccount is exported', () => {
	assert.ok(
		'canCreateAccount' in solution,
		'🚨 Make sure you export "canCreateAccount" - add: export { ..., canCreateAccount }',
	)
})

await test('canCreateAccount should be false', () => {
	assert.strictEqual(
		typeof solution.canCreateAccount,
		'boolean',
		'🚨 canCreateAccount should be a boolean',
	)
	assert.strictEqual(
		solution.canCreateAccount,
		false,
		'🚨 canCreateAccount should be false when password is empty',
	)
})
