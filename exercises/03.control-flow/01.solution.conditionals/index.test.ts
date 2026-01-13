import { testStep, expect } from '@epic-web/workshop-utils/test'
import { score, grade, passed } from './index.ts'

await testStep('score should be 85', async () => {
	expect(score).toBe(85)
})

await testStep('grade should be "B" for score 85', async () => {
	expect(grade).toBe('B')
})

await testStep('passed should be true for grade "B"', async () => {
	expect(passed).toBe(true)
})
