const checkPP = () => {
    return (target: any, prop: string, descriptor: PropertyDescriptor) => {
        if (this.ppAvailable > 0) console.log(`Your PP is ${this.ppAvailable}`);
        else console.log(`You can't check your PP, because is 0`);

    }
}

type Move = {
    name: string,
    power: number
};

class Pokemon {
    name: string;
    ppAvailable = 1;
    constructor(name: string, ppAvailable: number) {
        this.name = name;
        this.ppAvailable = ppAvailable;
    }

    @checkPP()
    figth(move: Move) {
        console.log(`${this.name} used ${move?.name}!`);
        this.ppAvailable -= 1;
    }

    calculateDamage(move: any) {
        return move.power;
    }
}

const thunderbolt: Move = { name: 'thunderbolt', power: 90 };
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(thunderbolt);
pikachu.figth(thunderbolt);