import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from '../state';
const initialState: any = {};
export default function configureStore(): Store<AppState> {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store: Store = createStore(rootReducer, initialState, composeEnhancers());
  return store;
}
