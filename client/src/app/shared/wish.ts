export class Wish {
    id: number;
    user_id: number;
    toy_id: number;

    constructor(user_id: number, toy_id: number)
    {
        this.user_id = user_id;
        this.toy_id = toy_id;
    }
}
