import { TeamsRepository } from "../repository/teams.repository";
import { Team } from "../models/team";

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class TeamsService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: TeamsService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new TeamsService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: TeamsRepository;
    private constructor() {
        this.repository = TeamsRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Team[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Team> {
        return this.repository.findById(id);
    }

    getTeamByUserId(id: number): Promise<Team[]> {
      return this.repository.findTeamByUser(id);
     }

    getBySearchForm(name: string, loc: string): Promise<Team> 
    {
      return this.repository.searchTeam(name, loc);
    }

    getBySearchFormPlaces(name: string, loc: string): Promise<Team> 
    {
      return this.repository.searchTeamByPlaces(name, loc);
    }

    getBySearchFormPlacesWithParams(name: string, loc: string): Promise<Team> 
    {
      return this.repository.searchTeamByPlacesWithParams(name, loc);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    create(team: any): Promise<Team> {
      return this.repository.insert(team);
    }

    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    update(team: any): Promise<Team> {
      return this.repository.update(team);
    }

    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
