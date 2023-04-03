class Car{
    name: string;
    lisense :  number;
    constructor(obName:string = "Car"){
        this.lisense =  200;
        this.name = obName
    }
    getLisence(){
        return this.lisense
    }
    move(distance:number =100){
        return console.log("Moved to Patna by ",distance, "Km")
    }
}

class BMW extends Car {
    constructor(name:string=""){
        super(name)
    }
}

// let obj =  new Car();
let obj2 =  new BMW();
console.log(obj2.name)