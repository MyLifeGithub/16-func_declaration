// let arr1 = [1,2,3,4,5,6] 
// let arr2 = [1,2,3,4,5,6] 

// let counter = 0;

// function countArrElem(arr) {
//     if (arr.lenght > 5) {
//         ++counter
//     }
// }
// countArrElem(arr1)
// countArrElem(arr2)

// let iterations = +prompt('iterations')
// let arr3 = [0,1]
// function fib(arr,num) {
//     for (let i = 1; i <= iterations; i++) {
//         const sum =  arr[i -1] + arr[i]
//         arr.push(sum)
//     }
//     console.log(arr[num]);
// }
// fib(arr3,iterations)

// 1
// let questionAge = +prompt('age?')
function clubAccess(age) {
    if (age >= 18) {
        alert('access allowed')
    }
    else if (age < 18) {
        alert('access is not allowed')
    }
    else {
        alert('stupid')
    }
}
// clubAccess(questionAge)

// 2
// let num1 = +prompt('num1')
// let num2 = +prompt('num2')
function calculate (a,b) {
    console.log('number 1 : ' + a);
    console.log('number 2 : ' + b);
    let plus = a + b;       console.log('method + , result : ' + plus);
    let minus = a - b;      console.log('method - , result : ' + minus);
    let multiply = a * b;   console.log('method * , result : ' + multiply);
    let devide = a / b;     console.log('method / , result : ' + devide);
    let power = a ** b;    console.log('method ** , result : ' + power);
    let p = b / 100 * a;          console.log('method % , result : ' + p);
}
// calculate(num1,num2)

// 3
let names = ["Alice", "Bob", "Charlie", "Diana"]; 
let MaxLength = 0; 
let LongestName = ''; 

function longestNameIs(arr,maxLength,longestName) {
    for (let i = 0; i < arr.length; i++) {
        let obj = {
            name: arr[i],
            long: arr[i].length
        };
    
        console.log(obj);
    
        if (obj.long > maxLength) {
            maxLength = obj.long;
            longestName = obj.name;
        }
    }
    console.log('longest name is : ' + longestName);
}
// longestNameIs(names,MaxLength,LongestName)
    
