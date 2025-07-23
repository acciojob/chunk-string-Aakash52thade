

function stringChop(str, size){

	if(size <= 0) return;

	let result = [];

	for(let i=0; i<str.length; i++){
		result.push(str.slice(i, i+size));
	}
	return result;
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));