var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        return 'Hello ${this.name}!';
    };
    return Greeter;
}());
console.log(new Greeter('Mateusz').greet());
