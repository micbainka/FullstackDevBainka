//Promise
function downloadSomeData (){
return new Promise((resolve,reject) => {

    setTimeout(() => {
        //resolve("Data downloaded successfully")
        reject("Error when loading")
    }, 5000)
   
})
}

downloadSomeData()
.then(result => {
    console.log("Success")

})
.catch(error => {
    console.log(error)
})
