export class Participate {
    user_id!: number;
    event_id!: number;
  
    constructor(input: Participate) {
      Object.assign(this, input);
  }
  }