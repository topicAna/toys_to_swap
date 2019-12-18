import { AssociationsRepository } from "../repository/associations.repository";
import { Association } from "../models/association";

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class AssociationsService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: AssociationsService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new AssociationsService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: AssociationsRepository;
    private constructor() {
        this.repository = AssociationsRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Association[]> {
        return this.repository.findAll();
    }

    getAllByName(): Promise<Association[]>{
        return this.repository.findAllByName();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Association> {
        return this.repository.findById(id);
    }

    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
        return this.repository.delete(id);
    }
}
