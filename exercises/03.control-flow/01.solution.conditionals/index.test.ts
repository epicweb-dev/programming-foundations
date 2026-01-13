import { testStep, expect } from '@epic-web/workshop-utils/test'
import { score, grade, passed } from './index.ts'

await testStep('score should be 85', async () => {
	expect(score, '🚨 score should be 85 - check your variable assignment').toBe(85)
})

await testStep('grade should be "B" for score 85', async () => {
	expect(grade, '🚨 grade should be "B" for score 85 - use if/else if statements to check score ranges (80-89 = B)').toBe('B')
})

await testStep('passed should be true for grade "B"', async () => {
	expect(passed, '🚨 passed should be true for grade "B" - check that grades A, B, and C are considered passing').toBe(true)
})
