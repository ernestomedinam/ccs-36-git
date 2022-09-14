class Friend {
    constructor({
        firstName,
        lastName,
        birthdate,
        color,
        catchPhrase
    }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.color = color;
        this.catchPhrase = catchPhrase;
        this.fullName = `${firstName} ${lastName}`;
    };
    get age() {
        const now = new Date();
        const birthdate = new Date(this.birthdate);
        const _age = now.getTime() - birthdate.getTime();
        return Math.floor(_age / (1000 * 60 * 60 * 24 * 365));
    };
    introduce() {
        return `Hello! My name is ${this.firstName}. ${this.catchPhrase}!!`;
    };
}

// module.exports = {
//     Friend: Friend
// };

export default Friend;