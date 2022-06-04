const checkPP = () =>
    (target: any, prop: string, descriptor: PropertyDescriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            if (this.ppAvailable > 0) {
                console.log(`${this.name}'s PP is ${this.ppAvailable}`);
                original.apply(this);
            }
            else console.log(`You can't check your PP, because is 0`);
        }
        return descriptor;
    }


interface Move {
    name: string;
    power: number;
};

class Pokemon {
    name: string;
    ppAvailable: number;
    constructor(name: string, ppAvailable: number) {
        this.name = name;
        this.ppAvailable = ppAvailable;
    }

    @checkPP()
    figth(move: Move): void {
        console.log(`${this.name} used ${move?.name}!`);
        this.ppAvailable -= 1;
    }

    calculateDamage(move: Move): number {
        return move.power;
    }
}

const thunderbolt: Move = { name: 'thunderbolt', power: 90 };
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(thunderbolt);
pikachu.figth(thunderbolt);