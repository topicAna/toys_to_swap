import { UserRepository } from "../repository/user.repository";
import { User } from "../models/user";


/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class UserService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: UserService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: UserRepository;
    private constructor() {
        this.repository = UserRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<User[]> {
        return this.repository.findAll();
    }

    verifyUser(username: string){
        return this.repository.verifyUser(username);
    }
}