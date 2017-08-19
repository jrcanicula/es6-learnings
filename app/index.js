
//block scoping


let a = 'hello world';

console.log(a); 

{
   let a = 'boom';
   console.log('a inside scope',a);
}