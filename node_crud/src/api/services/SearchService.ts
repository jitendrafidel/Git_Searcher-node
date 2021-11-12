import { Service } from 'typedi';
import { Issues } from '../models/issues';
import { Repositories } from '../models/repositories';
import { Search } from '../models/search';
import { Users } from '../models/users';
import { GithubService } from './GithubService';
import { RedisService } from './RedisService';
@Service()
export class SearchService {

    constructor(private github: GithubService, private redis: RedisService) { }

    public async find(search: Search): Promise<Users[] | Repositories[] | Issues[]> {
        return await this.redis.get(search.type, search.searchWord).then(async(res) => {
            if(res){
                return res;
            }
                
            return await this.github.gitFind(search.type, search.searchWord);
            
        })
    };

    public async clear(): Promise<boolean>{
        return await this.redis.clear()
    }
};
