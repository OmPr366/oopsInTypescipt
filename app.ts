class Car{
    lisense :  number;
    constructor(num:number = 100){
        this.lisense =  num;
    }
    getLisence(){
        return this.lisense
    }
    move(){
        console.log("Moved to Patna ")
    }
}

let obj =  new Car();
console.log(obj.getLisence())