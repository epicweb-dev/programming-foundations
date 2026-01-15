// Grade Description
// Convert letter grades to descriptive feedback using switch

const grade: string = 'B'

let description: string

switch (grade) {
	case 'A':
		description = 'Excellent'
		break
	case 'B':
		description = 'Good'
		break
	case 'C':
		description = 'Satisfactory'
		break
	case 'D':
		description = 'Needs Improvement'
		break
	case 'F':
		description = 'Failing'
		break
	default:
		description = 'Invalid grade'
}

console.log(`Grade ${grade}: ${description}`)

console.log('Results:', JSON.stringify({ grade, description }))
