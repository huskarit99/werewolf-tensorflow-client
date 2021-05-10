import { atom } from 'recoil';

const listOnlinePlayersState = atom({
  key: 'listOnlinePlayersState',
  default: []
})

export default listOnlinePlayersState;