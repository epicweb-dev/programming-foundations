// Grade Calculator
// Convert numeric scores to letter grades

const score: number = 85

let grade: string

if (score >= 90) {
	grade = 'A'
} else if (score >= 80) {
	grade = 'B'
} else if (score >= 70) {
	grade = 'C'
} else if (score >= 60) {
	grade = 'D'
} else {
	grade = 'F'
}

const passed: boolean = grade !== 'D' && grade !== 'F'

console.log(`Score: ${score}`)
console.log(`Grade: ${grade}`)
console.log(`Passed: ${passed}`)

console.log('Results:', JSON.stringify({ score, grade, passed }))
