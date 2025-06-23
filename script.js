function firstNonRepeatedChar(str) {
	let charCount = {};

	for(let ch of str){
		charCount[ch] = (charCount[ch] || 0) + 1;
	}

	for(let ch of str){
		if(charCount[ch] === 1){
			return ch;
		}
	}
	return null;
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 

