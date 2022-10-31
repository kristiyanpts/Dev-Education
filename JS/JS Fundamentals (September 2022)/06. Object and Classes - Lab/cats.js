function Main(Input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    for (let i = 0; i < Input.length; i++) {
        let cat = new Cat(Input[i].split(' ')[0], Input[i].split(' ')[1]);
        cat.meow();
    }
}

Main(['Mellow 2', 'Tom 5'])