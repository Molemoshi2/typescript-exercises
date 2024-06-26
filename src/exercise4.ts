class person {
    name:String
    age:Number
    private socialSecurityNumber:number = 54656

    constructor(name:String, age:Number){
        this.name = name
        this.age = age
    }
    displayName(){
        console.log(`Name: ${this.name}`)
    }
    //method to diplay age
    displayAge(){
        console.log(`Age: ${this.age}`)
    }
}

let personObject = new person('Shantel',24)

// diplay the person's name
personObject.displayName()
//display the person's age
personObject.displayAge()