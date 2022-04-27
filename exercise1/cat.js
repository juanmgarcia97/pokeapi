class Cat {
  hunger;
  #lonliness;
  tiredness;

  constructor() {
    this.hunger = 2;
    this.#lonliness = 5;
    this.tiredness = 8;
  }

  get happiness() {
    return this.happiness;
  }

  get lonliness() {
    return this.#lonliness;
  }

  get tiredness() {
    return this.tiredness;
  }

  static feedCats(cat, otherCat) {
    if (typeof cat == 'Cat' && typeof otherCat == 'Cat') {
      cat.eat();
      otherCat.eat();
    }
  }

  sleep() {
    this.hunger -= 1;
    this.tiredness -= 3;
    console.log('Your cat slept');
  }

  eat() {
    this.hunger -= 3;
    console.log('Your cat ate');
  }

  play() {
    this.hunger += 2;
    this.tiredness += 3;
    console.log('Your cat played');
  }

  pet() {
    this.#lonliness -= 2;
    console.log('Your cat was petted');
  }

  walk() {
    this.tiredness += 1;
    console.log('Your cat walked');
  }

  status() {
    if (this.hunger < 3) {
      console.log('Your cat is starving!');
    }
    if (this.lonliness > 7) {
      console.log('Play with the cat or pet her/him!');
    }
    if (this.tiredness > 7) {
      console.log('Your cat needs to sleep');
    }
  }
}

let c = new Cat();

c.status();
c.eat();
