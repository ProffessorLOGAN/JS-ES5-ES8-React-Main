//Async-Await in javascript

//Example 1

const getData1 = async () => {
    var data = "hello world";
    return data;
}

getData1().then(data => console.log(data));


//Example 2

const getData = async () => {
    var y = await "Tansen";
    console.log(y);
}

console.log(1)
getData()
console.log(2)

//the console prints 2 befor the "Hello world" . Thisis due to the usage of the await keyword.


//Example 3

function asynchrounous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"))

    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tansen Keshri");
        }, 1000)
    });

    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
}

async function display() {
    let data = await asynchrounous_operational_method();
    console.log(data);
}
display();
