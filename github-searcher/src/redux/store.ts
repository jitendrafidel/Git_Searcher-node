import { compose, createStore } from "redux";
import reducers from "./reducers/index";
import { persistStore } from "redux-persist";

export const store = createStore(
  reducers,
  {},
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store)