//Spread Operator

//syntax
/*

var var_name = [..iterable];


*/



//Rest operator

//syntax
/*

function function-name(..aguments){
    statements;
}


*/

// Example 1:

var var1 = [10,20,30,40,50];
var var2 = [60,70,80,90,100];
var var3 = [...var1,...var2];
console.log(var3);

// Example 2:

var arr1 = [10,20,30,40,50];
var arr2 = [...arr1,60];
console.log(arr2);

// Example 3:

const obj = {
    firstname: "tansen",
    lastname: "keshri",
};

const obj2 = { ...obj };

console.log(obj2);
console.log(obj2.firstname);
console.log(obj2.lastname);

// Example : Object with Rest

var students = {
        name :"tansen",
        age: 29,
        hobbies:"gaming"
    }

// //Array Destucturing

const {age,...rest} = students;
console.log(age);
console.log(rest);


// Example : Object with Spread

var students = {
        name :"tansen",
        age: 18,
        hobbies:"gaming"
    }

var newStudent = {
    ...students,
    age:22,
}

console.log(newStudent);


