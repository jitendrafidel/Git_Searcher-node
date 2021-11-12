import { Service } from "typedi";
import { createClient } from "redis";
import { Users } from "../models/users";
import { Repositories } from "../models/repositories";
import { Issues } from "../models/issues";

@Service()
export class RedisService {
  private client = createClient();

  constructor() { }

  public async add(key: string, value: Users[] | Repositories[] | Issues[], time: number): Promise<boolean> {    
    console.log(key,value,time);
    
    return this.client.setex(key, time, JSON.stringify(value));
  }

  public async get(key: string, value: string): Promise<Users[] | Repositories[] | Issues[]> {
    return new Promise((resolve, reject) => {
      this.client.get(key + "_" + value, async (err, data) => {
        if (err) reject(err);

        resolve(!data ? data : JSON.parse(data));
      });
    });
  }

  public async clear():Promise<boolean>{
    return this.client.flushall();
  }
}
