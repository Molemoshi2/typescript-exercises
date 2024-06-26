var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculator.prototype.addnumbers = function () {
        console.log("the sum is: ".concat(this.num1 + this.num2));
    };
    Calculator.prototype.subtractNumber = function () {
        console.log("the difference is: ".concat(this.num2 - this.num1));
    };
    Calculator.prototype.divideNumber = function () {
        var quotient = this.num2 / this.num1;
        console.log('the quotient is:', quotient);
    };
    Calculator.prototype.multiplyNumber = function () {
        console.log("the product is: ".concat(this.num1 * this.num2));
    };
    return Calculator;
}());
var calculate = new Calculator(2, 4);
calculate.addnumbers();
calculate.subtractNumber();
calculate.divideNumber();
calculate.multiplyNumber();
