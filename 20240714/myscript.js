class classProduct {

    constructor(width,heigth,weigth){
        this.width = width
        this.heigth = heigth
        this.weigth = weigth
    }

display(){
    console.log("Product specification (width:" + this.width + " height: " + this.heigth + " weight: "+ this.weigth + ")" )
    }
}

class classProductFactory{
    createProduct(width,heigth,weigth){
        return new classProduct(width,heigth,weigth)
    }
}

const factory = new classProductFactory()

const product = factory.createProduct(10,20,30);
const product2 = factory.createProduct(20,30,40);
product.display()
product2.display()