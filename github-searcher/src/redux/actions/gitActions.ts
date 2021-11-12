import { Issues } from "../../models/issues";
import { Repositories } from "../../models/repositories";
import { Users } from "../../models/users";
import { actionTypes } from "../constants/actionTypes";

export const setUsers = (users: Users) => {
  return {
    type: actionTypes.SET_USERS,
    payload: users,
  };
};

export const setRepositories = (repositories: Repositories) => {
  return {
    type: actionTypes.SET_REPOSITORIES,
    payload: repositories,
  };
};

export const setIssues = (issues: Issues) => {
  return {
    type: actionTypes.SET_ISSUES,
    payload: issues,
  };
};

export const delectStore = () => {
  return {
    type: actionTypes.DELECT_DATA,
  };
};