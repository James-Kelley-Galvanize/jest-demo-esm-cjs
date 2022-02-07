export class Monster {
  constructor() {}
  attack(target) {
    target.hp -= this.attackPower;
  }
}

// module.exports = Monster;
