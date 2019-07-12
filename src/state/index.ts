import { combineReducers } from 'redux';


export interface AppState {
}

export type GetState = () => AppState;

const rootReducer = combineReducers<AppState>({
});

export default rootReducer;
