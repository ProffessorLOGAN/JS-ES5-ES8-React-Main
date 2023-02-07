// Closure in Javascript

// Example: 1

var sum = function(){ //anonymous function -> function without name 
    console.log("Sum Value" + a);
    var c=4;
    return function(b){
        return a+b+c;
    }
}

var store = sum(2);  // Calling
console.log(store(5)); 

// Output
// Sum Value 2
// 11 


// Example: 2

var sum = function(){

    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}

var store =  sum(3,4,5);  // Calling

console.log(store.getSumTwo());
console.log(store.getSumThree());
// Output
// 7 
// 12

var store1 =  sum(6,7,8);  // Calling

console.log(store1.getSumTwo());
console.log(store1.getSumThree());

// Output
// 13 
// 21