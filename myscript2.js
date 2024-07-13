function examplefunction(){}

//alert("Hello world")

//Numeric
let length = 180 
//console.log(length)
//alert (length) 
let weigth = 85.5
//alert(weigth)


//Strings
let color = "Yellow"
console.log(color)

//Boolean

let x = true
console.log(x)
let y = false
console.log(y)


//Object
const person  = {firstName: "Marek", lastName:"Wisniewski" }
console.log(person)

//Array
const cars = ["Saab","Volvo","BMW"]
console.log(cars)

//Date
const date = new Date("2024-08-31")
console.log(date)

//Equal
console.log ("Wynik porownania: "+ (length==weigth))

//Equal and type
console.log ("Wynik porownania: "+ (length===weigth))

//Not Equal
console.log(100 != 101)

//Not Equal and type
console.log(100 !== 101)

//Greater 
console.log(100 > 101)

//Greater or eq
console.log(100 >= 101)

//Ternary operator
let result = 100 > 101 ? "TAK" : "NIE"
console.log(result)

//loops 

//for loop

for(let i = 0; i < 9; i =i+1) // i+1 tak samo i++
    {
        console.log(i)
    }

    for(let i = 9; i >= 0; i =i-1) // i+1 tak samo i++
    {
        console.log(i)
    }

    //foreach
    
    cars.forEach(function(element)
    {console.log(element)})


    //If ELSE

//IF ELSE
let themperature = 38.5
if(themperature >= 36 && themperature < 37){
    console.log("W normie")
}else if(themperature >= 37 && themperature < 38){
    console.log("Stan podgorączkowy")
}else if(themperature >= 38 && themperature < 40){
    console.log("Gorączka")
}else{
    console.log("Błąd pomiaru")
}


let money = 15
let voucher = false

if(money > 20 || voucher){
    console.log("miłego seansu")
}else {
            console.log("zapraszam do parku")
        }

//NOT 
if(!(15>20)){
    console.log("NOT")
}