import { Users } from "./users";
export interface Issues {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: Users;
  labels:
    [
        {
          id: number;
          node_id: string;
          url: string;
          name: string;
          color: string;
          default: string;
          description: string;
        }
      ]
  ;
  state: string;
  locked: boolean;
  assignee: string;
  assignees: [];
  milestone: string;
  created_at: string;
  updated_at: string;
  closed_at: string;
  author_association: string;
  active_lock_reason: string;
  body: string;
  reactions?: string;
  timeline_url: string;
  performed_via_github_app: string;
  score: number;
  comments: number;
}
