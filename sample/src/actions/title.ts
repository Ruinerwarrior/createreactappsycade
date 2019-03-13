import { async } from "../actions";
import { TITLE } from "../constants/actions";
import ApiTest from "../api/ApiTest";

const TitleApi = new ApiTest();

export function setTitle(title: string) {
  return async<typeof TITLE, string | undefined>(TITLE, TitleApi.getTitle)
}