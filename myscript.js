function examplefunction(){
    console.log("Function")
}
    window.onload = function(){
        examplefunction()
    }

    function substractArgs(arg1, arg2){
        console.log(arg1 - arg2)
    }

function calculateAge(yearOfBirth){
    return 2024 - yearOfBirth
}
function checkMovie(age,money){
    if(age>= 18 && money >= 30){
        return true
    }else{
        return false
    }
}
window.onload = function(){
    examplefunction()
    substractArgs(2,2)
    substractArgs(2,3)
    substractArgs(5,10)
    
let myAge = calculateAge(1992)
console.log("my age is "+ myAge)

console.log(checkMovie(myAge, money))
}

function basicAdd(a,b)