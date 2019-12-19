
import { WishRepository } from "../repository/wish.repository";
import { Wish } from "../models/wish";
import { Toy } from "../models/toy";


/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class WishService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: WishService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new WishService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: WishRepository;
    private constructor() {
        this.repository = WishRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Wish[]> {
        return this.repository.findAll();
    }

    getById(id: number): Promise<Wish> {
        return this.repository.findById(id);
    }

    getToyWish(id: number): Promise<Toy[]> {
        return this.repository.findToyIWish(id);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    create(wish: any): Promise<Wish> {
      return this.repository.insert(wish);
    }

    deleteWishFromUser(id: number)
    {
        return this.repository.deleteWishByUser(id);
    }
    
}
