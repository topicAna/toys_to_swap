import { CharityRepository } from "../repository/charity.repository";
import { Charity } from "../models/charity";


/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class CharityService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: CharityService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new CharityService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: CharityRepository;
    private constructor() {
        this.repository = CharityRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Charity[]> {
        return this.repository.findAll();
    }

    
}