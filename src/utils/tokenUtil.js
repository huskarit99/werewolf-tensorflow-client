const setToken = (username, token) => {
  localStorage.setItem(
    process.env.REACT_APP_TOKEN_KEY,
    JSON.stringify({
      username: username,
      token: token,
    })
  );
}

const clearToken = () => {
  localStorage.clear();
}

const getToken = () => {
  if (localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)) {
    const currentUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_TOKEN_KEY));
    if (currentUser.token) {
      return currentUser;
    }
    else
      return null;
  }
  else
    return null;
}

export { setToken, clearToken, getToken };
