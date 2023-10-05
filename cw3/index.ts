class Greeter {
    private name:String;

    constructor(name: String) {
        this.name = name;
    }

    public greet():String {
        return 'Hello ${this.name}!';
    }
}

console.log(new Greeter('Mateusz').greet());