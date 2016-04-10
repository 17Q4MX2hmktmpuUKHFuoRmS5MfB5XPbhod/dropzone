import React from 'react'
import { Input } from 'react-bootstrap';
import Modal from 'react-bootstrap-modal'
import {Flipper, Front, Back} from 'react-flipper'

const LoginModal = React.createClass({
  getInitialState() {
    return { isOpenWallet: false }
  },

  render() {
    let flipModal = () => this.setState({ isOpenWallet: !this.state.isOpenWallet })

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
          <Flipper isFlipped={this.state.isOpenWallet} orientation="horizontal">
            <Front>
              <p>In Drop Zone, your wallet is your 'account'. Information isn't
                stored on a central server, and this key unlocks that profile.
              </p>
              <p>If you don't have a wallet, it's easy to create a new one using
                only a random number. <a onClick={flipModal}>Click here to create an account</a>.</p>
              <form>
                <Input type="text" label="Type in your Existing Wallet Passphrase" placeholder="Enter your 12 word passphrase." />
              </form>
            </Front>
            <Back>
              <p>If you already have a wallet <a onClick={flipModal}>Click here to login to that account</a>.</p>
            </Back>
          </Flipper>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
          <button className='btn btn-primary' onClick={this.props.onLogin}>
            Open Wallet
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
})

export default LoginModal;
