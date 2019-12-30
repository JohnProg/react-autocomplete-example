import { applyMiddleware, createStore } from "redux";
import sagaMiddleware from "./../middlewares/sagas";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export default function configureStore() {
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, middlewares);

  // Execute Saga
  sagaMiddleware.run(rootSaga);

  return store;
}
