// returns a sum
var mysum = (a:number,b:number)=>{
    var total = a+b
    return total
}
// returns a fixed number
var fitIt = (num1:number)=>{
    let fixednum = num1.toFixed()
    return fixednum
}

// a funtion that takes a string and an optional booloen

var makeLower = (companyName:string, isEmployed?:boolean)=>{
    if (isEmployed==true){
        let newName = companyName.toLocaleUpperCase()
        return newName
    }
    else{
        companyName.toLocaleLowerCase()
        return companyName
    }
}
console.log(makeLower('MyCompany',true))
