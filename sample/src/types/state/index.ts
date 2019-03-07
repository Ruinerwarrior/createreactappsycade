import { AsyncActionStatus } from "../actions";

export type asyncActionState<P> = {
  status: AsyncActionStatus;
  payload: P | null | Error;
};

export type titleState = string;

export type RootState = {
  titleStatus: AsyncActionStatus;
  title: titleState;
  fullTitle: asyncActionState<string>;
};