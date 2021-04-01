function truncate(str, maxlength) {
	if (str.length > maxlength) {
		maximum = str.length
		maximum = maximum - maxlength
		newstr = str.substr(0, maximum)
		newstr += "…"
		return newstr
	} if (str.match(/…/)) {
		maximum = str.length
		maximum = maximum - maxlength
		newstr = str.substr(0, maximum)
		newstr += "…"
		return newstr
	} else {
		return str
	}
}
truncate()
