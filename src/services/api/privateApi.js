import Axios from 'axios';
import { getToken } from '../../utils/tokenUtil';

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
      console.error(error);
      return AuthenticationIsFail;
    }
  } else {
    return AuthenticationIsFail;
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
      // console.error(error);
      return { isSuccess: false };
    }
  } else {
    return { isSuccess: false };
  }
}

export { authTokenApi, getUser };