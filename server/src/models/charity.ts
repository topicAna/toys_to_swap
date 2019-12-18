export class Charity {
    id!: number;
    name!: string;
    zip_code!: number;
    description!: string;
    image!: string;

    constructor(input: Charity) {
        Object.assign(this, input);
    }
}