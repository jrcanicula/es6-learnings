/*arrow function*/

function blastoff(){
	console.log('3...32....23...123.');
}



const blastoffs = (b,c) => console.log(`i love pia ${b} haha, ${c}`,b,c);
//blastoff();

setTimeout(() => blastoffs('c','b'),1000);


blastoffs('a','5');


this.a  = 25;

/*
let print = function(){
	this.a = 50;
	console.log('this.a '.this.a);
}

print();

*/ console.log('asd');

console.log(this.a);
 
let arrowPrint  = () => console.log(this.a);

arrowPrint();