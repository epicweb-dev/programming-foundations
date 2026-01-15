import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('apostrophe is exported', () => {
	assert.ok(
		'apostrophe' in solution,
		'🚨 Make sure you export "apostrophe" - add: export { apostrophe, ... }',
	)
})

await test('should have string with apostrophe', () => {
	assert.strictEqual(
		solution.apostrophe,
		"It's working!",
		'🚨 apostrophe should be "It\'s working!" - make sure you escaped the apostrophe with \\\'',
	)
})

await test('quotes is exported', () => {
	assert.ok(
		'quotes' in solution,
		'🚨 Make sure you export "quotes" - add: export { apostrophe, quotes, ... }',
	)
})

await test('should have string with quotes', () => {
	assert.strictEqual(
		solution.quotes,
		'She said "Hi"',
		'🚨 quotes should be: She said "Hi" - make sure you escaped the double quotes with \\"',
	)
})

await test('newlines is exported', () => {
	assert.ok(
		'newlines' in solution,
		'🚨 Make sure you export "newlines" - add: export { ..., newlines, ... }',
	)
})

await test('should have Hello and World on separate lines', () => {
	assert.strictEqual(
		solution.newlines,
		'Hello\nWorld',
		'🚨 newlines should be "Hello\\nWorld" - use \\n in a single string',
	)
})

await test('tabs is exported', () => {
	assert.ok(
		'tabs' in solution,
		'🚨 Make sure you export "tabs" - add: export { ..., tabs }',
	)
})

await test('should have tab-separated values', () => {
	assert.ok(
		solution.tabs.includes('\t'),
		'🚨 tabs should include tab characters - make sure you used \\t for tabs',
	)
})
