const {apendix} = require("./apendix");

describe("una funcion que reciba sintomas y de un diagnostico", () => {
    it("si me duele 7/10, estoy azul y no he ido al baño en 3 días, devuelve 'vaya al hospital ya mismo'", () => {
        const diagnose = apendix(7, "blue", 3);
        expect(diagnose.includes("hospital")).toBeTruthy();
    });
    it("si me duele menor que 5, devuelve 'no se preocupe, tome Festal'", () => {
        const diagnose = apendix({
            pain: 4
        });
        expect(diagnose).toBe("no se preocupe, tome Festal");
    });
    it("si me duele 5 y no he ido al baño en 3 días, devuelve 'coma fibra y tome acetaminofén'", () => {
        const diagnose = apendix({
            pain: 5,
            noPoopDays: 3
        });
        expect(diagnose).toBe("coma fibra y tome acetaminofén");
    });
});