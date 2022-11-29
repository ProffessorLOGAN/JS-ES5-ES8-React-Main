//Promises in javascript

/*
//Syntax

var promise = new Promise(function(resolve,reject){
    //code
})

*/

//Example of promise

var promise = new Promise(function (resolve, reject) {
    const x = "tansen";
    const y = "tansen";

    if (x === y) {
        resolve();

    } else {
        reject();
    }
})

promise.then(function () {
    console.log("successfull");

}).catch(function () {
    console.log("Error");
});