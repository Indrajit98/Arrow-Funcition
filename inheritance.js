class Father{
    constructor(name) {
        this.fatherName='Rabindra';
    }
}

class Child extends Father{
    constructor(name){
        super()
        this.name=name;
    }
    getFullName(){
        return "father name " + this.fatherName + " " + "child name " + this.name;
    }
}
const childName= new Child('Indrajit')
console.log(childName.getFullName())
const childName1= new Child('Sanjit')
console.log(childName1.getFullName())

