export class Toy {
    id!: number;
    name!: string;
    image!: string;
    description!: string;
    user_id!: number;
    charity_id!: number;


    constructor(input: Toy) {
        Object.assign(this, input);
    }
}