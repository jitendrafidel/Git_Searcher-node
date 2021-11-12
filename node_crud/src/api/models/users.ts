import { IsOptional} from "class-validator";

export class Users {
    public id: number | null;
    public login: string | null;
    public node_id: string | null;
    public avatar_url: string | null;
    public gravatar_id: string | null;
    public url: string | null;
    public html_url: string | null;
    public followers_url: string | null;
    public following_url: string | null;
    public gists_url: string | null;
    public starred_url: string | null;
    public subscriptions_url: string | null;
    public organizations_url: string | null;
    public repos_url: string | null;
    public events_url: string | null;
    public received_events_url: string | null;
    public type: string | null;
    public site_admin: boolean | null;
    @IsOptional()
    public score: number | null;
}