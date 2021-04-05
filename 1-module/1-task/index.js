function factorial(n) {
	var res = 1;
	if (n == 0){
		return res
	} else{
	    while (n--)
	        res *= n + 1
	    return res;
	}
}
factorial();
