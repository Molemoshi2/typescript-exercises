class Calculator {
     num1:number
     num2: number
    constructor(num1:number,num2:number){

        this.num1 = num1
        this.num2 = num2
    }
    addnumbers(){
        console.log(`the sum is: ${this.num1 + this.num2}`)
    }
    subtractNumber(){
        console.log(`the difference is: ${this.num2 - this.num1}`)
    }
    divideNumber(){
        let quotient = this.num2/this.num1
        console.log('the quotient is:',quotient)
    }
    multiplyNumber(){
        console.log(`the product is: ${this.num1*this.num2}`)
    }
}

let calculate = new Calculator(2,4)
calculate.addnumbers()
calculate.subtractNumber()
calculate.divideNumber()
calculate.multiplyNumber()