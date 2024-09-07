function display(data){
    console.log(data)
}

const dataFromApi = fetch("https://goweather.herokuapp.com/weather/Jodhpur")

dataFromApi.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
})

display(dataFromApi)
console.log("me first")