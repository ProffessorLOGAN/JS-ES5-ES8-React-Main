let obj = {
    name: "peter"
};

let user = obj; // here user is assig a obj memory location

user.name = "tansen"; // when user.name is change , obj name key value is also change due to memory is referecing to obj .

console.warn(obj);

// Output
// {name:"tansen"}


// Shallow Copy
let obj = {
    name: "peter"
};

let user = Object.assign({},obj); //  1st Method --> Shallow Copy
let user = {..obj}  // 2nd Method --> Shallow Copy

user.name = "tansen";

console.warn("obj value is : ",obj);
console.warn("user value is : ",user);

Problem in Shallow Copy

let obj = {
    name: "peter",
    address: {
        city: 'Noida',
        state: 'UP'
    }
};

let user = { ...obj };
user.adress.city = "Gurgaon";

console.warn("object is: ", obj);

// Output
// object is : {
// name: " peter",
//     address: {
//     city: "Gurgaon",   // here city changes noida to gurgaon due to shallow copy;
//         state: "UP"
// }
// };

// Deep Copy

let obj = {
    name: "peter",
    address: {
        city: 'Noida',
        state: 'UP'
    }
};

let user = JSON.parse(JSON.stringify(obj));
user.adress.city = "Gurgaon";

console.warn("object is: ", obj);
console.warn("user is: ", user);

// Output
// object is : {
// name: " peter",
//     address: {
//     city: "Noida", // no changes is happening due to deep copy
//         state: "UP"
// }
// };

// user is : {
// name: " peter",
//     address: {
//     city: "Gurgaon",
//         state: "UP"
// }
// };


// Problems in Deep Copy

let obj = {
    name: "peter",
    address: {
        city: 'Noida',
        state: 'UP'
    },
getData(): function() {
    return "all data is here ";
},
};

let user = JSON.parse(JSON.stringify(obj));
user.adress.city = "Gurgaon";

console.warn("object is: ", obj);
console.warn("user is: ", user);

// Output
// object is : {
// name: " peter",
//     address: {
//     city: "Noida",
//         state: "UP"
// },
// getData(): function() {
//     return "all data is here ";
// },
// };

// user is : {
// name: " peter",
//     address: {
//     city: "Gurgaon",
//         state: "UP"
// }   // here in user no function and date type is copying or showing due to deep copy
// };


// Loadash npm package --> Solution for depp copy probmlems

let obj = {
    name: "peter",
    address: {
        city: 'Noida',
        state: 'UP'
    },
getData(): function() {
    return "all data is here ";
},
};

let user = _.cloneDeep(obj); // Loadash package is using for deep copy obj
user.adress.city = "Gurgaon";

console.warn("object is: ", obj);
console.warn("user is: ", user);

// Output
// object is : {
// name: " peter",
//     address: {
//     city: "Noida",
//         state: "UP"
// },
// getData(): function() {
//     return "all data is here ";
// },
// };

// user is : {
// name: " peter",
//     address: {
//     city: "Gurgaon",
//         state: "UP"
// },
// getData(): function() {
//     return "all data is here ";
// },   // here in user getData() function is copy and showing 
// };

