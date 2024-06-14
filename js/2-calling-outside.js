// calling form outside world
    function printHello(){
        console.log("Hello world")
    }
    function blockFor1Sec(){
        for(let i = 0 ; i < 10000 ; i++){
            console.log(i)
        }
        
    }

    setTimeout(printHello,0)
    blockFor1Sec()