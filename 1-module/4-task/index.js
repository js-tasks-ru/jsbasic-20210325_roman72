function checkSpam(str) {
	spam = str.toLowerCase()
	if(spam.match(/1xbet/)){
		return true
	} if(spam.match(/xxx/)){
		return true
	} else {
		return false
	}
}
