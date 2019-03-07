import { async } from "../actions";
import { TITLE } from "../constants/actions";

export function setTitle(title: string) {
  return async<typeof TITLE, string>(TITLE, loadTitle, title)
}

export async function loadTitle(title: string) {
  return title;
};