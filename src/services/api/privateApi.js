import Axios from 'axios';
import { setToken, getToken, clearToken } from '../../utils/tokenUtil';

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

export { authTokenApi };