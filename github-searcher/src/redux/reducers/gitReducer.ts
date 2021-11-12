import { Issues } from "../../models/issues";
import { Repositories } from "../../models/repositories";
import { Users } from "../../models/users";
import { actionTypes } from "../constants/actionTypes";


const initialState = {
  data: {},
};

export const gitReducer = (state: Users | Repositories| Issues|{} = initialState, { type, payload }:any) => {
    switch (type){
        case actionTypes.SET_USERS:
            return {...state,data:payload};
        case actionTypes.SET_REPOSITORIES:
            return {...state,data:payload};
        case actionTypes.SET_ISSUES:
            return {...state,data:payload};
        case actionTypes.DELECT_DATA:
            return {data:{}}
        default:
            return state;
    }
};
