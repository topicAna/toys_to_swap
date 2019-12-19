export class Wish {
    id!: number;
    user_id!: number;
    toy_id!: number;


    constructor(input: Wish) {
        Object.assign(this, input);
    }
}