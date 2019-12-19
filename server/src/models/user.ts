export class User {
    id!: number;
    firstname!: string;
    lastname!: string;
    email!: string;
    password!: string;
    pseudo!: string;
    zip!: number;

    constructor(input: User) {
        Object.assign(this, input);
    }
}