const stateOfAuthentication = {
  PROCESSING: -1,
  FAIL: 0,
  SUCCESS: 1,
}

const operatorType = {
  FAIL: {
    CREATE: "fail.create",
    READ: "fail.read",
    UPDATE: "fail.update",
    DELETE: "fail.delete"
  },
  SUCCESS: {
    CREATE: "success.create",
    READ: "success.read",
    UPDATE: "success.update",
    DELETE: "success.delete"
  },
  NOT_AVAILABLE: "not_available",
  AVAILABLE: "available"
}

const jwtEnum = {
  NO_TOKEN: 'no_token',
  TOKEN_INVALID: 'token_invalid',
}
const signInResponseEnum = {
  SUCCESS: 'signin_success',
  USERNAME_IS_EMPTY: 'username_is_empty',
  PASSWORD_IS_EMPTY: 'password_is_empty',
  WRONG_USERNAME: 'wrong_username',
  WRONG_PASSWORD: 'wrong_password',
  SERVER_ERROR: 'server_error'
}

const signUpResponseEnum = {
  SUCCESS: 'signup_success',
  FULLNAME_IS_EMPTY: 'fullname_is_empty',
  USERNAME_IS_EMPTY: 'username_is_empty',
  PASSWORD_IS_EMPTY: 'password_is_empty',
  USERNAME_IS_UNAVAILABLE: 'username_is_unavailable',
  SERVER_ERROR: 'server_error',
  PASSWORD_IS_LESS_THAN_6_LETTERS: 'password_is_less_than_6_letters'
}
const updateResponseEnum = {
  SUCCESS: 'update_success',
  FULLNAME_IS_EMPTY: 'fullname_is_empty',
  PASSWORD_IS_EMPTY: 'password_is_empty',
  SERVER_ERROR: 'server_error',
  PASSWORD_IS_LESS_THAN_6_LETTERS: 'password_is_less_than_6_letters'
}

const colorAlertEnum = {
  ERROR: "red",
  SUCCESS: "green",
  WARNING: "yellow"
}

export { stateOfAuthentication, operatorType, signInResponseEnum, signUpResponseEnum, updateResponseEnum, jwtEnum, colorAlertEnum };