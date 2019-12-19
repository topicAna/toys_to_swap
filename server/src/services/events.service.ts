import { EventRepository } from './../repository/events.repository';
import { Event } from 'src/models/event';
import { Participate } from '../models/participate';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class EventService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: EventService
;
    static getInstance() {
        if (!this.instance) {
            this.instance = new EventService
        ();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: EventRepository;
    private constructor() {
        this.repository = EventRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Event[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Event> {
        return this.repository.findById(id);
    }

    getParticipateByUser(id: number): Promise<Event> {
        return this.repository.findParticipateByUserId(id);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param event post to create
     */
    create(event: any): Promise<Event> {
      return this.repository.insert(event);
    }

    createByUser(participate: Participate)
    {
        return this.repository.insertByUser(participate);
    }

    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param event post to update
     */
    update(event: any): Promise<Event> {
      return this.repository.update(event);
    }

    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }

    deleteEventByUser(id: number): Promise<any> {
        return this.repository.deleteEventByUser(id);
      }
}
