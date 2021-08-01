import { action } from 'typesafe-actions';
import { RepositoryTypes, RepositoryState} from './type'

export const loadRequest = () => action(RepositoryTypes.LOAD_REQUEST);
export const loadSuccess = (data: RepositoryState) => action(RepositoryTypes.LOAD_SUCCES, data);
export const loadFailure = () => action(RepositoryTypes.LOAD_FAILURE);