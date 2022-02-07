const Monster = require("../src/Monster");

describe(`Monster`, () => {
  let myMonster = new Monster("Grendel");
  beforeEach(() => {});
  test("has a name", () => {
    expect(myMonster.name).toEqual("Grendel");
  });
});
