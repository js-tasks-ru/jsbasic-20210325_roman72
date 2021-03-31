function ucFirst(str) {
	if(str == "В"){
		str = "В"
		return str
	} if(str == ""){
		str = ""
		return str
	} else {
		str = str.replace(/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase(); })
		return str
	}
}
ucFirst()