function firstNonRepeatedChar(str) {
	int n = str.length;

	for(int i=0;i<n;i++){
		let isFound==false {
		}= false;
		for(int j=i+1;j<n;j++){
			if(str[i] == str[j]){
				isFound = true;
				break;
			}
		}
		if(isFound==false){
			return str[i];
		}
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

