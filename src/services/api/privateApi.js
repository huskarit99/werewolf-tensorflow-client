import Axios from 'axios';

import { getToken } from 'utils/tokenUtil';
import { updateResponseEnum } from "utils/enumsUtil";

const ENDPOINT = `http://localhost:${process.env.REACT_APP_API_URL}/api/private-controller`;

const AuthenticationIsSuccess = 1;
const AuthenticationIsFail = 0;

const authTokenApi = async () => {
  const PATH = ENDPOINT + '/auth-token';
  const currentUser = getToken();
  if (currentUser) {
    try {
      const response = await Axios({
        method: "post",
        url: PATH,
        headers: {
          Authorization: currentUser.token,
        },
      });
      if (response.data.isSuccess)
        return AuthenticationIsSuccess;
      else
        return AuthenticationIsFail;
    } catch (error) {
      return AuthenticationIsFail;
    }
  } else {
    return AuthenticationIsFail;
  }
}

const updateUser = async (fullname, password) => {
  const PATH = ENDPOINT + '/user';
  const currentUser = getToken();
  if (currentUser) {
    try {
      const response = await Axios({
        method: "put",
        url: PATH,
        headers: {
          Authorization: currentUser.token,
        },
        data: {
          fullname: fullname,
          password: password
        }
      });
      if (response.data.isSuccess)
        return {
          isSuccess: true,
          message: "Update successfully !!!"
        }
      else {
        return {
          isSuccess: false,
          message: "Server Error !!!"
        };
      }
    } catch (error) {
      let message = "";
      if (!error || !error.response || !error.response.data)
        return {
          isSuccess: false,
          message: "Server Error !!!"
        };
      switch (error.response.data.code) {
        case updateResponseEnum.FULLNAME_IS_EMPTY: {
          message = "Fullname must be not empty !!!";
          break;
        }
        case updateResponseEnum.PASSWORD_IS_EMPTY: {
          message = "Password must be not empty !!!";
          break;
        }
        case updateResponseEnum.PASSWORD_IS_LESS_THAN_6_LETTERS: {
          message = "Password must be not less than 6 letters !!!";
          break;
        }
        case updateResponseEnum.SERVER_ERROR: {
          message = "Password must be not less than 6 letters !!!";
          break;
        }
        default: {
          message = "Server Error !!!";
          break;
        }
      }
      return {
        isSuccess: false,
        message: message
      };
    }
  } else {
    return {
      isSuccess: false,
      message: "Client Error !!!"
    };
  }
}

const getUser = async () => {
  const PATH = ENDPOINT + '/user';
  const currentUser = getToken();
  if (currentUser) {
    try {
      const response = await Axios({
        method: "get",
        url: PATH,
        headers: {
          Authorization: currentUser.token,
        },
      });
      if (response.data.isSuccess)
        return response.data;
      else
        return { isSuccess: false };
    } catch (error) {
      if (!error || !error.response || !error.response.data)
        return { isSuccess: false };
      return { isSuccess: false };
    }
  } else {
    return { isSuccess: false };
  }
}

export { authTokenApi, getUser, updateUser };