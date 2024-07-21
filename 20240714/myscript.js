//STANDARD

function doThings(){
    return Promise.resolve("ok")
}

doThings()
.then(res => {
    console.log(res)
})

//ASYNC

async function doThingsAsync(){
    //return "ok"
    return Promise.reject ("not ok")
}

doThingsAsync()
.then (res => {
    console.log(res)
})
.catch(error => {
    console.log(error)
})