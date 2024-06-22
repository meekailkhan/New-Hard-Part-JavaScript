// function createFunction(array){
//     let i = 0;
//     const inner = {
//         next : function(){
//             let res = array[i];
//             i++;
//             return res
//         }
//     }
//     return inner
// }

// let returnFunction = createFunction([1,2,3,4,5,6]);
// returnFunction.next()
// returnFunction.next()

// console.log(returnFunction.next())
// console.log(returnFunction.next())
// console.log(returnFunction.next())
function *createFlow(){
    yield 3
    yield 4
    yield 5
    yield 6

}
let returnNext = createFlow()
returnNext.next()
console.log(returnNext.next())
console.log(returnNext.next())
console.log(returnNext.next())
console.log(returnNext.next())
