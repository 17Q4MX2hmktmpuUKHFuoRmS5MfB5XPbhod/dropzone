import React from 'react'
import { Input, Modal } from 'react-bootstrap'
import Mnemonic from 'bitcore-mnemonic'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const LoginModal = React.createClass({
  getInitialState() {
    return { isCreatingWallet: false, newWalletMnemonic: null, 
      isLoginInvalid: false, isCreateInvalid: false, loginPassphrase: null,
      newWalletConfirmed: false }
  },

  render() {
    let flipModal = () => {
      let newState = { isCreatingWallet: !this.state.isCreatingWallet,
        isLoginInvalid: false, isCreateInvalid: false }

      if (newState.isCreatingWallet && !this.state.newWalletMnemonic) {
        newState.newWalletMnemonic = (new Mnemonic()).toString()
      }
  
      this.setState(newState)
    }

    let newMnemonic = (e) => {
      e.preventDefault()
      this.setState({ newWalletMnemonic: Mnemonic().toString() })
    }

    let saveAndClose = () => {
      if (this.state.isCreatingWallet) {
        if (this.state.newWalletConfirmed) {
          this.props.onHide()
          if (this.props.onOpenSuccess) {
            this.props.onOpenSuccess(this.state.newWalletMnemonic)
          }
        }
        else {
          this.setState({ isCreateInvalid: true })
        }
      } else {
        if (Mnemonic.isValid(this.state.loginPassphrase)) {
          this.props.onHide()
          if (this.props.onOpenSuccess) {
            this.props.onOpenSuccess(this.state.loginPassphrase)
          }
        } else {
          this.setState({ isLoginInvalid: true })
        }
      }
    }

    let onShow = () => {
      this.setState({ isLoginInvalid: false, isCreateInvalid: false, 
        newWalletConfirmed: false, loginPassphrase: null })
    }

    return (
      <Modal 
        id="loginModal"
        width="700"
        show={this.props.show} 
        onShow={onShow}
        onHide={this.props.onHide}
        className={(this.state.isLoginInvalid || this.state.isCreateInvalid) ? "animated jello" : null}
        aria-labelledby="ModalHeader">
        <Modal.Header closeButton>
          <Modal.Title>Open or Create a Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div 
            className={(this.state.isCreatingWallet) ? 'hidden' : 'animated flipInX'}>
            <p>In Drop Zone, your wallet is your 'account'. Information isn't
              stored on a central server, and this key unlocks that profile.
            </p>
            <p>If you don't have a wallet, it's easy to create a new one using
              only a random number. <a onClick={flipModal}>Click here to create an account</a>.</p>
            <form>
                <Input type="textarea" 
                  className="form-group has-error"
                  onChange={(e) => {this.state.loginPassphrase = e.target.value}}
                  defaultValue={this.state.loginPassphrase}
                  label="Type in your Twelve word passphrase:"
                  bsStyle={(this.state.isLoginInvalid) ? "error" : null}
                  help={(this.state.isLoginInvalid) ? '(This is not a valid passphrase)' : null}
                  placeholder="Enter your twelve word passphrase here" />
            </form>
          </div>
          <div
            className={(this.state.isCreatingWallet) ? 'animated flipInX' : 'hidden'}>
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
                  <Input type="textarea" 
                    disabled={true} 
                    label="This is your new wallet:" 
                    value={this.state.newWalletMnemonic} 
                    bsSize="small" />
                </div>
                <div className="col-md-2">
                  <button title="Action" id="refreshSeed" 
                    onClick={newMnemonic}
                    className="btn btn-default">
                    <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
              <Input type="checkbox" 
                onChange={(e) => { 
                  this.state.newWalletConfirmed = e.target.checked}}
                refs="newWalletConfirmed"
                bsStyle={(this.state.isCreateInvalid) ? "error" : null}
                label=" I have written down or otherwise securely stored my passphrase." />

            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-default' onClick={this.props.onHide}>
            Cancel
          </button>
          <button className='btn btn-primary' onClick={saveAndClose}>
          {(this.state.isCreatingWallet) ? 'Create' : 'Open'} Wallet
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
})

export default LoginModal;
