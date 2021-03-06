import { combineReducers } from "redux";
import { gitReducer } from "./gitReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['searchResult']
}

const reducers = combineReducers({
    searchResult: gitReducer,
})

export default persistReducer(persistConfig,reducers);