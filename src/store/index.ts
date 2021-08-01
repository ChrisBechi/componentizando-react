import { createStore, Store } from 'redux';
import { RepositoryState } from './Menu/type';
import rootReducer from './rootReducer';

export interface ApplicationState {
    repository: RepositoryState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;