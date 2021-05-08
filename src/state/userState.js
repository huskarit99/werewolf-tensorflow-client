import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: {
    id: "",
    fullname: "",
    username: "",
  }
})

export default userState;