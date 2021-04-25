import Axios from 'axios';
import { setToken } from '../../utils/tokenUtil';

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
    }
    return response.data.isSuccess;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const signUpApi = async (fullname, username, password) => {
  try {
    const PATH = ENDPOINT + '/users';
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