import { AsyncAction } from ".";
import { TITLE } from "../../constants/actions";

export type setTitle = AsyncAction<typeof TITLE, string>;