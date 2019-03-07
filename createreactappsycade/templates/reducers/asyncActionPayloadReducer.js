module.exports = (conditions) => {
	return(
`import { AsyncAction, AsyncActionStatus } from '../types/actions';

export function asyncActionPayloadOfReducer<T extends string, P>(type: T, initialState: P | null = null) {
	return (state: P | null = initialState, action: AsyncAction<T, P>): P | null => {
		if (action.type === type && action.status === AsyncActionStatus.SUCCEEDED) {
			return action.payload;
		} 
		return state;
	};
}`
	);
}