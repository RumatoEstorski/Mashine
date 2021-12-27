function Mashine(){
    this.state = "stopped";
    this.time = 2000;
    this.timer;
    this.interval;
}

Mashine.prototype.run = function(){
    this.state = "started";
    document.write("Начинаю работать...");
    document.write(`Время приготовления - ${this.time}`);
    this.interval = setInterval(
        function(){
            document.write(" | ");
        }.bind(this),
        1000
    );
    this.timer = setInterval(this.onReady.bind(this),this.time)
    document.write(this.state);
};

Mashine.prototype.onReady = function(){
    clearInterval(this.interval);
    clearInterval(this.timer)
    this.state = "stopped";
    document.write(`Готово! ${this.state}`);
};
//let mashine = new Mashine;
//mashine.run();
function CoffeeMashine(){
    this.drink = "вода"
    document.write(`приготовление: ${this.drink}`)
    Mashine.apply(this);

}

CoffeeMashine.prototype = Object.create(Mashine.prototype);
CoffeeMashine.prototype.constructor = CoffeeMashine;
CoffeeMashine.prototype.run = function(drink){
    this.drink = drink;
    if(this.drink == "латте"){
        this.time = 5000;
    }
    if(this.drink == "експрессо"){
        this.time = 3000;
    }
    document.write(`приготовление: ${this.drink}`);
    Mashine.prototype.run.apply(this);
}
let coffeeMashine = new CoffeeMashine();
coffeeMashine.run("латте");