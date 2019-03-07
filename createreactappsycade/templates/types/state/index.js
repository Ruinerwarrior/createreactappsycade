module.exports = (conditions) => {
	return(
`import { AsyncActionStatus } from "../actions";

export type asyncActionState<P> = {
	status: AsyncActionStatus;
	payload: P | null | Error;
};
`
	);
}