function sumSalary(salaries) {
	allSalaries = 0
	for (let key in salaries) {
		let keys = salaries[key]
		if(isFinite(keys)){
			allSalaries = allSalaries + keys
		} else {
			continue
		}
	}
	return allSalaries
}
