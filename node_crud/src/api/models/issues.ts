import { IsOptional} from "class-validator";
import { Users } from "./users";
export class Issues {
    public url: string | null;
    public repository_url: string | null;
    public labels_url: string | null;
    public comments_url: string | null;
    public events_url: string | null;
    public html_url: string | null;
    public id: number | null;
    public node_id: string | null;
    public number: number | null;
    public title: string | null;
    public user: Users | null;
    public labels: [{
        id:number;
        node_id:string | null;
        url:string | null;
        name:string | null;
        color:string | null;
        default:string | null;
        description:string | null;
    }]| null;
    public state: string | null;
    public locked: boolean | null;
    public assignee: string | null;
    public assignees: [] | null;
    public milestone: string | null;
    public created_at: string | null;
    public updated_at: string | null;
    public closed_at: string | null;
    public author_association: string | null;
    public active_lock_reason: string | null;
    public body: string | null;
    public reactions?: string | null;
    public timeline_url: string | null;
    public performed_via_github_app: string | null;
    public score: number | null;
    public comments: number | null;
    
}