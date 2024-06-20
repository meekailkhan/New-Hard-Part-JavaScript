
function createFunction(arr){
    let i = 0;
    function inner(){
        const element = arr[i]
        i++
        return element
    }
    return inner
}
let nextElement = createFunction([1,2,3,4,5,6])
console.log(nextElement()) // 1
console.log(nextElement()) // 2
console.log(nextElement()) // 3
console.log(nextElement()) // 4
console.log(nextElement()) // 5
// console.log(nextElement()) // 6
const element1 = nextElement() // 1
const element2 = nextElement() // 2
const element3 = nextElement() // 3
const element4 = nextElement() // 4
const element5 = nextElement() // 5
const element6 = nextElement() // 6