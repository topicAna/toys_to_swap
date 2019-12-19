
import { ToyRepository } from "../repository/toys.repository";
import { Toy } from "../models/toy";


/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class ToyService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: ToyService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ToyService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: ToyRepository;
    private constructor() {
        this.repository = ToyRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Toy[]> {
        return this.repository.findAll();
    }

    getById(id: number): Promise<Toy> {
        return this.repository.findById(id);
    }

    getToyByUser(id: number): Promise<Toy> {
        return this.repository.findToyByUserId(id);
    }


    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    create(toy: any): Promise<Toy> {
      return this.repository.insert(toy);
    }

    deleteToyByUser(id: number): Promise<any> {
        return this.repository.deleteToyByUser(id);
      }

    
}
