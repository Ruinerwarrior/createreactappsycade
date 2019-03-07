import { AsyncAction } from ".";
import { TITLE } from "../../constants/actions";
import { async } from "../../actions";

export type setTitle = AsyncAction<typeof TITLE, string>;