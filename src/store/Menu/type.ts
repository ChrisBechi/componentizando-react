
export enum RepositoryTypes {
    LOAD_REQUEST = '@menu/LOAD_REQUEST',
    LOAD_SUCCES = '@menu/LOAD_SUCCES',
    LOAD_FAILURE = '@menu/LOAD_FAILURE',
}

export interface RepositoryState {
  contador: number
}