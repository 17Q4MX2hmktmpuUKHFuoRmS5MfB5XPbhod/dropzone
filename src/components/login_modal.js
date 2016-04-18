import React from 'react'
import { Input, Modal } from 'react-bootstrap'
import {Flipper, Front, Back} from 'react-flipper'
import Mnemonic from 'bitcore-mnemonic'

const LoginModal = React.createClass({
  getInitialState() {
    return { isCreatingWallet: false, newWalletMnemonic: null }
  },

  render() {
    let flipModal = () => {
      let newState = { isCreatingWallet: !this.state.isCreatingWallet }

      if (newState.isCreatingWallet && !this.state.newWalletMnemonic) {
        newState.newWalletMnemonic = (new Mnemonic()).toString()
      }
  
      this.setState(newState)
    }

    let newMnemonic = () => {
      this.setState({ newWalletMnemonic: Mnemonic().toString() })
    }

    let modalAction = (this.state.isCreatingWallet) ? 'Create' : 'Open'

    return (
      <Modal 
        id="loginModal"
        width="700"
        show={this.props.show} 
        onHide={this.props.onHide}
        aria-labelledby="ModalHeader">
        <Modal.Header closeButton>
          <Modal.Title>Open or Create a Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Flipper isFlipped={this.state.isCreatingWallet} orientation="horizontal">
            <Front>
              <p>In Drop Zone, your wallet is your 'account'. Information isn't
                stored on a central server, and this key unlocks that profile.
              </p>
              <p>If you don't have a wallet, it's easy to create a new one using
                only a random number. <a onClick={flipModal}>Click here to create an account</a>.</p>
              <form>
                <Input type="text" label="Type in your 12 word passphrase:" placeholder="Log into your wallet" />
              </form>
            </Front>
            <Back key={this.state.newWalletMnemonic}>
              <p>
                We have created a passphrase for you in the box below.
              </p>
              <p>
                If you already have a wallet <a onClick={flipModal}>click here to login</a> to that account.
              </p>
              <p className="important">
                If someone gets your passphrase, they gain access to your wallet.
                No one stores this passphrase, and it cannot be recovered if lost.
              </p>
              <form>
                <div className="row">
                  <div className="col-md-10">
                    <Input type="textarea" disabled={true} label="This is your new wallet:" 
                      value={this.state.newWalletMnemonic} 
                      bsSize="small" />
                  </div>
                  <div className="col-md-1">
                    <button title="Action" onClick={newMnemonic} className="btn btn-default">
                      <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                    </button>
                  </div>
                </div>
                <Input type="checkbox" 
                  label=" I have written down or otherwise securely stored my passphrase." />

              </form>
              <p>
                Write this passphrase down and keep it safe. If you lose this 
                passphrase, you will lose access to your wallet forever.
              </p>
            </Back>
          </Flipper>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-default'>
            Cancel
          </button>
          <button className='btn btn-primary' onClick={this.props.onLogin}>
          {modalAction} Wallet
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
})

export default LoginModal;
