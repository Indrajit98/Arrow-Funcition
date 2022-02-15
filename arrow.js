// Normal function
function add (x,y){
    const add=x+y;
    return add;
}
const result= add(25,30)
console.log(result)

// //////////Variable function///////////////////
const sub=function(x,y){
    const sub= x-y;
    return sub;
}
const result1=sub(25,10);
console.log(result1);

////////////Arrow function 1 step //////////////////
const arrow1=(x,y)=>(x+y)
const result2=arrow1(22,11);
console.log(result2);

//////////////Arrow function 2 step//////////////////
const arrow2 = x => x*2;
const result3= arrow2(5);
console.log(result3)

//////////////Arrow function 3 step//////////////////
const arrow3 = (x,y) =>{
    const add = x+y;
    const sub= add*y;
    return sub;
}
const result4 = arrow3(25,15)
console.log(result4)
