module.exports = (conditions) => {
	return(
`import { AsyncAction, AsyncActionStatus } from '../types/actions';
import { asyncActionState } from '../types/state';

const initialState: asyncActionState<null> = {
	status: AsyncActionStatus.UNSTARTED,
	payload: null
}

export function asyncActionOfReducer<T extends string, P>(type: T, initialPayload: P | null = null) {
	return (state: asyncActionState<P | null> | null = { status: initialState.status, payload: initialPayload }, action: AsyncAction<T, P>): asyncActionState<P> | null => {
		if (action.type === type) {
			if (action.status === AsyncActionStatus.SUCCEEDED) {
				return { ...state, payload: action.payload, status: action.status };
			}
			if (action.status === AsyncActionStatus.FAILED) {
				return { ...state, payload: action.payload, status: action.status };
			}
			return { status: action.status, payload: state && state.payload }
		}
		return state;
	};
}`
	);
}