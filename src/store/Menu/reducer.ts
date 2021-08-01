import { Reducer } from 'redux';
import { RepositoryState, RepositoryTypes } from './type';

const INITIAL_STATE: RepositoryState = 
{
    contador: 0
}

const reducerRepository: Reducer<RepositoryState> = (state = INITIAL_STATE, action) => {
    switch( action.type ){
        case RepositoryTypes.LOAD_REQUEST:
            return { ...state, isLoading: action.data };
        case RepositoryTypes.LOAD_SUCCES:
            return { ...state, isLoaging: false, isFail: false, data: action.payload.data,};
        case RepositoryTypes.LOAD_FAILURE:
            return {...state, isLoaging: false, isFail: true, data: []};
        default:
            return state;
    }
};

export default reducerRepository;