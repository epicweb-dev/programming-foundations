// Theater Seating Chart
// Use nested loops to build rows and seats

const rows = ['A', 'B', 'C']
const seatsPerRow = 4

let seatChart = ''

for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
	let rowLine = ''

	for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
		const seatLabel = `${rows[rowIndex]}${seatNumber}`
		rowLine += seatNumber === 1 ? seatLabel : ` ${seatLabel}`
	}

	seatChart += `${rowLine}\n`
}

console.log(seatChart)

export { seatChart }
