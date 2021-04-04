function truncate(str, maxlength) {
	if (str.length > maxlength) {
		maximum = maxlength - 1
		newstr = str.substr(0, maximum)
		newstr += "…"
		return newstr
	} else {
		return str
	}
}
truncate()
