export class Association {
    id!: number;
    name!: string;
    zip_code!: number;
    description!: string;
    image!: string;

    constructor(input: Association) {
        Object.assign(this, input);
    }
}