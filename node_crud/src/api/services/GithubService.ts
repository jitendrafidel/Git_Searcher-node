import { Service } from 'typedi';
import { RedisService } from './RedisService';
import fetch from 'node-fetch';
import { HttpError } from 'routing-controllers';
import { Users } from '../models/users';
import { Repositories } from '../models/repositories';
import { Issues } from '../models/issues';
@Service()
export class GithubService {

    constructor(private redis: RedisService) { }

    public async gitFind(key: string, value: string): Promise<Users[] | Repositories[] | Issues[]> {
        try {
            const response = await fetch(`https://api.github.com/search/${key}?q=${value}`)
            const data = await response.json();
            const time = 7200000;
            await this.redis.add(key + "_" + value, data.items, time);
            return data.items
        } catch (error: any) {
            throw new HttpError(400, error.message);
        }

    };

};
