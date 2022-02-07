import { Character } from "../src/Character.mjs";

describe(`Character Class`, () => {
  let myChar;
  beforeEach(() => {
    myChar = new Character("Moonface", "bard");
  });

  test("has a name", () => {
    expect(myChar.name).toBe("Moonface");
  });
  test("has HP", () => {
    expect(myChar.hp).toBe(100);
  });
  test("has an inventory", () => {
    expect(myChar.inventory).toEqual([]);
  });
  test("loses hp when hit", () => {
    myChar.loseHP(20);
    expect(myChar.hp).toEqual(80);
  });
  test("has a character_class", () => {
    expect(myChar.character_class).toEqual("bard");
  });
  test("has an attack method", () => {
    let type = typeof myChar.attack;
    expect(type).toBe("function");
  });
});
