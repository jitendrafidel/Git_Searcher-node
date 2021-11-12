import { Users } from "./users";
export class Repositories {
    public id: number | null;
    public name: string | null;
    public node_id: string | null;
    public full_name: string | null;
    public private: string | null;
    public owner: Users | null;
    public html_url: string | null;
    public description: string  | null;
    public fork: string | null;
    public url: string | null;
    public forks_url: string | null;
    public keys_url: string | null;
    public collaborators_url: string | null;
    public teams_url: string | null;
    public hooks_url: string | null;
    public issue_events_url: string | null;
    public events_url: string | null;
    public assignees_url: string | null;
    public branches_url: string | null;
    public tags_url: string | null;
    public blobs_url: string | null;
    public git_tags_url: string | null;
    public git_refs_url: string | null;
    public trees_url: string | null;
    public statuses_url: string | null;
    public languages_url: string | null;
    public stargazers_url: string | null;
    public contributors_url: string | null;
    public subscribers_url: string | null;
    public subscription_url: string | null;
    public commits_url: string | null;
    public git_commits_url: string | null;
    public comments_url: string | null;
    public issue_comment_url: string | null;
    public contents_url: string | null;
    public compare_url: string | null;
    public merges_url: string | null;
    public archive_url: string | null;
    public downloads_url: string | null;
    public issues_url: string | null;
    public pulls_url: string | null;
    public milestones_url: string | null;
    public notifications_url: string | null;
    public labels_url: string | null;
    public releases_url: string | null;
    public deployments_url: string | null;
    public created_at: string | null;
    public updated_at: string | null;
    public pushed_at: string | null;
    public git_url: string | null;
    public ssh_url: string | null;
    public clone_url: string | null;
    public svn_url: string | null;
    public homepage: string | null;
    public size: number | null;
    public stargazers_count: number | null;
    public watchers_count: number | null;
    public language: string | null;
    public has_issues: boolean | null;
    public has_projects: boolean | null;
    public has_downloads: boolean | null;
    public has_wiki: boolean | null;
    public has_pages: boolean | null;
    public forks_count: number | null;
    public mirror_url: string | null;
    public archived: boolean | null;
    public disabled: boolean | null;
    public open_issues_count: number | null;
    public license: {
        key : string,
        name: string,
        spdx_id : string,
        url : string,
        node_id: string
    } | null;
    public allow_forking: boolean | null;
    public is_template: boolean | null;
    public topics: [] | null;
    public forks: number | null;
    public open_issues: number | null;
    public watchers: number | null;
    public default_branch: string | null;
    public score: number | null;
    
}