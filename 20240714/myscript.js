/*class AppConfig{
    firstName = "John"
    lastName = "Doe"
    age = 15
}*/
/*
const myInstance = new AppConfig()
console.log(myInstance)*/

class AppConfig{
    constructor(number = 5, darkMotive = false){
    if(AppConfig.exists){
        return AppConfig.instance 
    }
    this.randomNumber = Math.random()
    this.number = number
    this.darkMotive = darkMotive
    AppConfig.exists = true
    AppConfig.instance = this
    return this
    }
}

const configObject = new AppConfig(2)
const configObject2 = new AppConfig(1)

console.log(configObject)
console.log(configObject2)
console.log(configObject===configObject2)