export class Character {
  constructor(name, character_class) {
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.character_class = character_class;
  }
  loseHP(amount) {
    this.hp -= amount;
  }
  attack() {}
}

// module.exports = Character;
