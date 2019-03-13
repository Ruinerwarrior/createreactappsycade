import { async } from "../actions";
import { TITLE } from "../constants/actions";
import ApiTest from "../api/ApiTest";

export function setTitle(title: string) {
  return async<typeof TITLE, string | undefined>(TITLE, ApiTest.getTitle)
}