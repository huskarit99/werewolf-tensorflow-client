import { atom } from 'recoil';
import { stateOfAuthentication } from 'utils/enumsUtil';

const isAuthenticatedState = atom({
  key: 'isAuthenticatedState',
  default: stateOfAuthentication.PROCESSING
})

export default isAuthenticatedState;