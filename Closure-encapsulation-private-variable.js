function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const colock1 = stopWatch();
console.log(colock1());
console.log(colock1());
console.log(colock1());
console.log(colock1());


const colock2 = stopWatch();
console.log(colock2());
console.log(colock2());
console.log(colock2());
console.log(colock2());
console.log(colock1());
console.log(colock1());
console.log(colock2());
console.log(colock2());