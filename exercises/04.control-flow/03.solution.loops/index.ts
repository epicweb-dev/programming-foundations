// Exhibit Labels
// Using a for loop to build a numbered list

let exhibitLabels = ''

for (let exhibitNumber = 1; exhibitNumber <= 5; exhibitNumber++) {
	exhibitLabels += `Exhibit ${exhibitNumber}\n`
}

console.log(exhibitLabels)

export { exhibitLabels }
