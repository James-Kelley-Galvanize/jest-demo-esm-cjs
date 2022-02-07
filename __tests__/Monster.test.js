import { Monster } from "../src/Monster.mjs";
describe(`Monster`, () => {
  let myMonster = new Monster("Grendel");
  beforeEach(() => {});
  test("has a name", () => {
    expect(myMonster.name).toEqual("Grendel");
  });
});
