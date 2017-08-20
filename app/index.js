/*arrow function*/


//let points = [10,20,30,40,50];


//let addOne = (element) => element + 1; 


//points = points.map(addOne);


//points = points.map((element)=>element + 1)

//console.log(points);




let isPassing  = (grade) => {
	return grade >= 80;
}

let scores = [23,50,102,123,50];
 
//let passing  = scores.filter(isPassing);

let passing  = scores.filter(element => element >= 80);

console.log(passing);
