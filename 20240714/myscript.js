function loadUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User Data")
        }, 1000)
        
    }
)
}
function loadBooks()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Error while downloading Books") 
        }, 1000)
    })
}

function loadProducts()
{
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Products Data ")
    }, 1000)

    })
} 

async function render(){
    const user = await loadUserData()


    let books 
    loadBooks()
    .then(result => {
        books = result
    })
    .catch(error => {
        console.log(error)
        books = ""
    }

    )
    //const books = await loadBooks() //await gwarantuje ze czekamy na dane bez awaita funkcja laduje tylko status pending
    const Products = await loadProducts()
    console.log(user, books, Products)
}

window.onload = function() {
    render()
}