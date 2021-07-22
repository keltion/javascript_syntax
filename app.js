const calculator = {
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multiple: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        if(b==0)
            return "error"
        return a/b;
    },
}

console.log(calculator.add(12,5));
console.log(calculator.minus(12,5));
console.log(calculator.multiple(12,5));
console.log(calculator.divide(12,5));
console.log(calculator.divide(12,0));

