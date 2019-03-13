import { StartedAsyncAction, SucceededAsyncAction, FailedAsyncAction, AsyncActionStatus } from "../types/actions";

/**
 * The action returned by the "async" action just before the asynchronous action passed to the "async" action is started
 *  
 * @template T The action type
 * 
 * @param[type] The action type
 * 
**/
function startedAsyncAction<T>(type: T): StartedAsyncAction<T> {
  return {
    type,
    status: AsyncActionStatus.STARTED,
  };
}

/**
 * The action returned by the "async" action if the asynchronous action passed to the "async" action succeeded
 *  
 * @template T The action type
 * @template P The return type of the asynchronous action passed to the "async" action
 * 
 * @param[type] The action type
 * @param[error] the error returned by the failed asynchronous action
**/
function succeededAsyncAction<T, P>(type: T, payload: P): SucceededAsyncAction<T, P> {
  return {
    type,
    status: AsyncActionStatus.SUCCEEDED,
    payload,
  };
}

/**
 * The action returned by the "async" action if the asynchronous action passed to the "async" action failed
 *  
 * @template T The action type
 * 
 * @param[type] The action type
 * @param[error] the error returned by the failed asynchronous action
**/
function failedAsyncAction<T>(type: T, error: Error): FailedAsyncAction<T> {
  return {
    type,
    status: AsyncActionStatus.FAILED,
    payload: error,
  };
}

/**
 * provides a actioncreator capable of handling asynchronous methods like api calls
 * the actioncreator sets the status of the async action and the returned payload of the async action.
 * the folowing statusses can be returned:
 * 
 * STARTED: is set just before the async action gets awaited
 * 
 * SUCCEEDED: is set after the async action is successfully awaited 
 * 
 * FAILED: is set after the async action is failed
 * 
 * if the async action is successfully awaited it will set the value returned from the async action 
 *  
 * @template T The action type
 * @template P The return type of the asynchronous method
 * 
 * @param[type] The action type
 * 
 * @param[action] The asynchronous method that is called that returns the data for the reducer
**/

export function async<T, P>(type: T, action: (...args: any[]) => Promise<P>, ...args: any[]) {
  return async (dispatch: any) => {
    dispatch(startedAsyncAction(type));
    try {
      const payload = await action(...args);
      dispatch(succeededAsyncAction(type, payload));
    } catch (error) {
      dispatch(failedAsyncAction(type, error));
    }
  };
}

export function sync<T, P>(type: T, payload: P) {
  return ({ type, payload });
}