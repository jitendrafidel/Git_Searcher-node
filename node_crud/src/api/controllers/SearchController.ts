import { Body, Delete,HttpCode, JsonController, Post} from 'routing-controllers';
import { Issues } from '../models/issues';
import { Repositories } from '../models/repositories';
import { Search } from '../models/search';
import { Users } from '../models/users';
import { SearchService } from '../services/SearchService';


@JsonController()
export class SearchController {

    constructor(private searchService: SearchService) { }
    
    @Post('/search')
    @HttpCode(200)
    public async searchGitData(@Body() body: Search): Promise<Users[] | Repositories[] | Issues[]> {
        return this.searchService.find(body);
    }

    @Delete('/clear-cache')
    @HttpCode(200)
    public async clearCache(): Promise<boolean> {
        return this.searchService.clear();
    }
}
