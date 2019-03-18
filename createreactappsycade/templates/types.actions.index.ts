export enum AsyncActionStatus {
	UNSTARTED = 'UNSTARTED',
	STARTED = 'STARTED',
	SUCCEEDED = 'SUCCEEDED',
	FAILED = 'FAILED',
}

export interface StartedAsyncAction<T> {
	type: T;
	status: AsyncActionStatus.STARTED;
}

export interface SucceededAsyncAction<T, P = any> {
	type: T;
	status: AsyncActionStatus.SUCCEEDED;
	payload: P;
}

export interface FailedAsyncAction<T> {
	type: T;
	status: AsyncActionStatus.FAILED;
	payload: Error
}

export type AsyncAction<T, P = any> = StartedAsyncAction<T> | SucceededAsyncAction<T, P> | FailedAsyncAction<T>;