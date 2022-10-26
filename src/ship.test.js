const Ship = require('./ship');




test("Ship object", () => {
    let myShip = Ship(2);

    expect(myShip.hit()).toBe(1);
    expect(myShip.hit()).toBe(2);
    expect(myShip.isSunk()).toBe(true);
})