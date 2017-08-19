
function print(a,b,c){

	console.log(a,b,c);

}

function printtest(...z){

	console.log(...z);

}

let z = [1,2,3];
print(...z)

printtest(1,2,3);	