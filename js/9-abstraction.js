class Car {
    #engineStatus = false;

    startCar(){
        this.#startEngine();
        console.log("engine has started")
    }

    #startEngine(){
        this.#engineStatus = true;
        console.log("engine is running...")
    }
}

const myCar = new Car();

myCar.startCar(); // engine is running... engine has started
myCar.startEngine() // error : startEngine is not a function