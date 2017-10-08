import { LOGIN_WITH_FACEBOOK, REQUEST } from "../constants/actionTypes";

export function loginWithFB() {
  return {
    type: LOGIN_WITH_FACEBOOK[REQUEST],
  }
}
