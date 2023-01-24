class Computer{
    constructor(brand){
        this.brand = brand
    }
    showBrand(){
        return "Ho un computer " + this.brand
    }
}
let macbook = new Computer("Apple")
console.log(macbook)
console.log(macbook.showBrand())

let surface = new Computer("Microsoft")
console.log(surface.showBrand())

//questa classe è utilizzabile da sola


class ComputerModel extends Computer{
    //estendiamo da Computer
    constructor(brand, model){
        super(brand)
        //invoco il costruttore Computer in modo da assegnare "brand"
        //al parametro con cui ho creato il mio ComputerModel
        this.model = model
    }

    showComplete(){
        //voglio che showComplete mostri sia brand che model
        return this.showBrand() + ", il modello è " + this.model
    }
}

let macbookAir = new ComputerModel("Apple","Macbook Air",)
console.log(macbookAir.showBrand())//showBrand deriva da Computer

console.log(macbookAir.showComplete())

