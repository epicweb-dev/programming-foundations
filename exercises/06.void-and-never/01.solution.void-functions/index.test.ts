import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { logInfoResult, logErrorResult, logWithTimestampResult } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('logInfo should be callable and return void', () => {
	assert.strictEqual(
		logInfoResult,
		'undefined',
		"🚨 logInfo should return undefined (void) - functions that don't return a value return undefined",
	)
})

await test('logError should be callable and return void', () => {
	assert.strictEqual(
		logErrorResult,
		'undefined',
		"🚨 logError should return undefined (void) - functions that don't return a value return undefined",
	)
})

await test('logWithTimestamp should be callable and return void', () => {
	assert.strictEqual(
		logWithTimestampResult,
		'undefined',
		"🚨 logWithTimestamp should return undefined (void) - functions that don't return a value return undefined",
	)
})
