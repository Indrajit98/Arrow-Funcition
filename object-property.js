const student = [
   {id:71, name:'Indrajit'},
   {id:49, name:'Mohon'},
   {id:50, name:'Joydip'},
   {id:32, name:'Nayeem'}
]
// const Name= student.map(x=> x.name)
// console.log(Name)
// const ids= student.map(x=>x.id)
// console.log(ids)
const big = student.filter(s=>s.name=='Mohon');
console.log(big) 