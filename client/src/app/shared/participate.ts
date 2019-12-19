export class Participate {
    user_id: number;
    event_id : number;

    constructor(user_id: number, event_id: number)
    {
       this.user_id = user_id;
       this.event_id = event_id;
    }
}
