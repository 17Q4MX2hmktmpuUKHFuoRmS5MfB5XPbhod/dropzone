import { WALLET_SET_PRIVKEY, WALLET_DISCARD_PRIVKEY } from '../constants/wallet'

function wallet(state = {}, action){
  switch(action.type){
    case WALLET_SET_PRIVKEY:
      return {...state, bip38: action.bip38}
    case WALLET_DISCARD_PRIVKEY:
      return {}
    default:
      return state;
  }
}

module.exports = wallet;
