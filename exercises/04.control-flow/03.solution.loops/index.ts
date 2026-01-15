// Star Staircase
// Using loops to build a fun string pattern

let output = ''

for (let row = 1; row <= 5; row++) {
	let line = ''
	for (let count = 0; count < row; count++) {
		line += '*'
	}

	output += `${line}\n`
}

console.log(output)

export { output }
