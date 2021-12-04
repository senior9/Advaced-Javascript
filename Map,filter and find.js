const numbers = [5, 4, 2, 8, 9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// }

// const map = numbers.map(function(element, index, array){
//         console.log(element, index, array);
// })

// const mapFunction = numbers.map(x => x * x);
// console.log(mapFunction);


const function1 = function square(element) {
    return element * element; 
}
const result = numbers.map(function1);
console.log(result);

const filterFunction = numbers.filter(x => x>5)
console.log(filterFunction);

const findFunction = numbers.find(x => x>8);
console.log(findFunction);
// console.log(output);