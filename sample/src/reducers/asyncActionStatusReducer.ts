import { AsyncAction, AsyncActionStatus } from '../types/actions';

export type ReduxState = AsyncActionStatus;
export const initialState = AsyncActionStatus.UNSTARTED;

export function asyncActionStatusOfreducer<T extends string>(type: T) {
  return (state: ReduxState = initialState, action: AsyncAction<T>): ReduxState => {
    if (action.type === type) {
      return action.status;
    } 
    return state;
  };
}