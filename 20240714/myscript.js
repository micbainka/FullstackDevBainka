/*class AppConfig{
    firstName = "John"
    lastName = "Doe"
    age = 15
}*/
/*
const myInstance = new AppConfig()
console.log(myInstance)*/

class AppConfig{
    constructor(number = 5){
    if(AppConfig.exists){
        return AppConfig.instance 
    }
    this.randomNumber = Math.random()
    this.number = number
    AppConfig.exists = true
    AppConfig.instance = this
    return this
    }
}

const configObject = new AppConfig(8)
const configObject2 = new AppConfig(1)

console.log(configObject)
console.log(configObject2)