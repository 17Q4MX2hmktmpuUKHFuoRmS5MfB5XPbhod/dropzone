import { WALLET_SET_PRIVKEY, WALLET_DISCARD_PRIVKEY } from '../constants/wallet'

function walletSetPrivkey(bip38){
  return { type: WALLET_SET_PRIVKEY, bip38: bip38 }
}

function walletDiscardPrivkey(){
  return { type: WALLET_DISCARD_PRIVKEY }
}

module.exports = {
  walletSetPrivkey,
  walletDiscardPrivkey
}
