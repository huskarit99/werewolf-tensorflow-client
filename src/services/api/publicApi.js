import Axios from 'axios';

import { setToken } from 'utils/tokenUtil';
import { signInResponseEnum } from 'utils/enumsUtil';

const ENDPOINT = `http://localhost:${process.env.REACT_APP_API_URL}/api/public-controller`;

const signInApi = async (username, password) => {
  try {
    const PATH = ENDPOINT + '/auth-user';
    const response = await Axios({
      method: "post",
      url: PATH,
      data: {
        username: username,
        password: password,
      },
    });
    if (response.data.isSuccess) {
      setToken(username, response.data.token);
      return {
        isSuccess: true,
      }
    }
    return {
      isSuccess: false,
      message: "Client Error !!!"
    }
  } catch (error) {
    let message = "";
    switch (error.response.data.code) {
      case signInResponseEnum.USERNAME_IS_EMPTY: {
        message = "Username must be not empty !!!";
        break;
      }
      case signInResponseEnum.PASSWORD_IS_EMPTY: {
        message = "Password must be not empty !!!";
        break;
      }
      case signInResponseEnum.WRONG_USERNAME: {
        message = "Username went wrong !!!";
        break;
      }
      case signInResponseEnum.WRONG_PASSWORD: {
        message = "Password went wrong !!!";
        break;
      }
      case signInResponseEnum.SERVER_ERROR: {
        message = "Server Error !!!";
        break;
      }
      default: {
        message = "Server error !!!!";
      }
    }
    return {
      isSuccess: false,
      message: message
    };
  }
}

const signUpApi = async (fullname, username, password) => {
  try {
    const PATH = ENDPOINT + '/user';
    const response = await Axios({
      method: "post",
      url: PATH,
      data: {
        fullname: fullname,
        username: username,
        password: password,
      },
    });
    if (response.data.isSuccess) {
      setToken(username, response.data.token);
    }
    return response.data.isSuccess;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { signInApi, signUpApi };