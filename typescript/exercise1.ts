const PI: number = Math.PI;
const age: number = 24;
const PersonName: string = 'Alexander';

type Rol = 'Admin' | 'User';
type Person = {
    name: string;
    age: number;
    rol: Rol
}

let maybe: string | number;
let rol: Rol;

rol = 'User';
rol = 'Admin';
maybe = 25;
maybe = 'something else';


const person: Person = {
    name: PersonName,
    age: age,
    rol: rol // can be Admin or User
}

console.log(person);