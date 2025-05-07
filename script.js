function stringChop(str, size) {
	size = parseInt(size); 
	let res=[]
	let i=0,n=str.length
	let temp=""
	while(i<n){
		temp+=str[i++];
		if(temp.length==size){
			res.push(temp)
			temp=""
		}
	}
	if(temp.length>0){
		res.push(temp)
	}
	return res
  // your code here
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
