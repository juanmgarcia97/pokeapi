var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
var checkPP = function () {
    return function (target, prop, descriptor) {
        if (_this.ppAvailable > 0)
            console.log("Your PP is ".concat(_this.ppAvailable));
        else
            console.log("You can't check your PP, because is 0");
    };
};
var Pokemon = /** @class */ (function () {
    function Pokemon(name, ppAvailable) {
        this.ppAvailable = 1;
        this.name = name;
        this.ppAvailable = ppAvailable;
    }
    Pokemon.prototype.figth = function (move) {
        console.log("".concat(this.name, " used ").concat(move === null || move === void 0 ? void 0 : move.name, "!"));
        this.ppAvailable -= 1;
    };
    Pokemon.prototype.calculateDamage = function (move) {
        return move.power;
    };
    __decorate([
        checkPP()
    ], Pokemon.prototype, "figth", null);
    return Pokemon;
}());
var thunderbolt = { name: 'thunderbolt', power: 90 };
var pikachu = new Pokemon('pikachu', 1);
pikachu.figth(thunderbolt);
pikachu.figth(thunderbolt);
