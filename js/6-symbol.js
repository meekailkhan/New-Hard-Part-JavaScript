let x = Symbol("meekail")
// console.log(x.description)

let age = Symbol(19)
let obj = {
    name : "meekail",
    class : 12,
    [age] : age.description
}
console.log(obj.name)
console.log(obj.class)
console.log(obj[age])