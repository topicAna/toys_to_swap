export class Toy {
    id: number;
    name : string;
    image : string;
    description: string;
    user_id: number;
    charity_id: number;

    constructor(name: string, image: string, description: string, user_id: number, charity_id: number)
    {
        this.name = name;
        this.image = image;
        this.description = description;
        this.user_id = user_id;
        this.charity_id = charity_id;
    }
}
