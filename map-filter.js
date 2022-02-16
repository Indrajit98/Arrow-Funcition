const number=[5,6,8,9,1,2,7,6,12,3]
const double=[]
///////////////////////////////////////
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     let result = element*element;
//     double.push(result)  
// }
// console.log(double)

/////////////////////////////////////
//  function square(element){
//     return element * element;
//  }
////////////////////////////////////////////
//  const square= element=> element*element;
//  const square = x=>x*x;
//////////////////////////////////////////////
//  number.map(function(element){
//      console.log(element)
//  })
///////////////////////////////////////////
 const result=number.map(x=>x*x);
 console.log(result)

const result1 = number.filter( x => x > 5 )
console.log(result1)
    
 const result2 = number.find(x=> x>5);
 console.log(result2)
