// async function test(){
//     console.log("two");
//     await console.log("three");
//     console.log("four")
// }

// console.log("one");
// test()
// console.log('five')

async function test(){
    return (await fetch("json/student_data.json")).json()
}
test().then((response)=>{
    return response[1]
})

// test().then((response)=>{
//     return response[0]
// }).then((response)=>{
//     return response.name
// }).then((response)=>{
//     console.log(response)
// })


// async function getWeather(){
//     try{
//         return (await fetch("https://goweather.herokuapp.com/weather/Jodhpur")).json()
//     }catch(error){
//         console.log(error)
//     }
// }
// getWeather().then((response)=>{
//     console.log(response)
// })