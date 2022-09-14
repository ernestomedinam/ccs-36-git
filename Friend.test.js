const {Friend} = require("./Friend.mjs");

describe("someone we care about", () => {
    const friendData = {
        firstName: "Deimian",
        lastName: "Vasquez",
        birthdate: new Date(1988, 6, 5),
        color: "blue",
        catchPhrase: "Hola, ¿qué tal?"
    };
    it("is created with a first name, a last name, a birthdate, a color, and a catch phrase", () => {
        const friend = new Friend({...friendData});
        expect(friend).toBeInstanceOf(Friend);
    });
    it("has full name and a age", () => {
        const friend = new Friend({...friendData});
        expect(friend.age).toBe(34);
        expect(friend.fullName).toEqual(`${friend.firstName} ${friend.lastName}`);
    });
    it("introduces itself with its first name and a catch phrase", () => {
        const friend = new Friend({...friendData});
        const introduction = friend.introduce();
        expect(introduction.includes(friend.firstName)).toBeTruthy();
        expect(introduction.includes(friend.catchPhrase)).toBeTruthy();
    });
});
