export class Team {
    id!: number;
    name!: string;
    logo!: string;
    details!: string;
    nbPlayerMax!: number;
    city!: string;
    zip_code!: number;
    country!: string;

    constructor(input: Team) {
        Object.assign(this, input);
    }
}