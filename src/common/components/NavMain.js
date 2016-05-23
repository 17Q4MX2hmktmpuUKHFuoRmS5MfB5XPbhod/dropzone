import React from 'react'
import { connect } from 'react-redux'
import { walletSetPrivkey } from '../../actions/wallet'
import { Link } from 'react-router'
import { Tabs, Tab, Nav, NavItem, Navbar } from 'react-bootstrap'
import LoginModal from '../../components/login_modal.js'
import { Input } from 'react-bootstrap';
import Mnemonic from 'bitcore-mnemonic'
import {Address, Networks} from 'bitcore-lib'

const mapStateToProps = (state) => {
  return { walletMnemonic: state.wallet.bip38 }
}

const mapDispatchToProps = (dispatch) => {
  return { onOpenSuccess: (bip38) => { dispatch(walletSetPrivkey(bip38)) } }
}

const ConnectedLoginModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal)

const SIDE_LINKS = [
  { link: '#/', page: 'home',  title: 'Home' },
  { link: '#/listings', page: 'listings',  title: 'Listings' },
  { link: '#/sellers', title: 'Sellers', page: 'sellers', disabled: false },
  { link: '#/buyers', title: 'Buyers', page: 'buyers', disabled: false },
  { link: '#/blocks', title: 'Blocks', page: 'blocks', disabled: false },
  { link: '#/communications', page: 'communications',  title: 'Communications',
    disabled: true },
  { link: '#/transactions', page: 'transactions',  title: 'Your Transactions',
    disabled: true },
  { link: '#/create-item', page: 'create_item',  title: 'Post a Listing' },
  { link: '#/bulk-upload', page: 'bulk_upload',  title: 'Bulk Upload' },
  { link: '#/settings', page: 'settings',  title: 'Settings' },
  { link: '#/help', page: 'help',  title: 'Help' }
];


const NavMain = React.createClass({
  getInitialState() {
    return { loginModalOpen: false }
  },
  
  propTypes: {
    activePage: React.PropTypes.string,
    walletMnemonic: React.PropTypes.string,
  },

  render() {
    let brand = (
      <Link to="#/" className="navbar-brand">
        <img src="/img/dropzone-logo-32x32.png" width="24" height="24" />
        Drop Zone
      </Link>
    );
    let sidebar = SIDE_LINKS.map(this.renderSideItem)
    let activeKey = SIDE_LINKS.findIndex( i => (i.page == this.props.activePage) )
    let closeModal = () => this.setState({ loginModalOpen: false })
    let openModal = () => this.setState({ loginModalOpen: true })

    let walletLabel = null
    if (this.props.walletMnemonic) {
      let privKey = new Mnemonic(this.props.walletMnemonic).toHDPrivateKey()
      var address = new Address(privKey.hdPublicKey.publicKey, Networks.livenet);
      console.log(address)
      let walletLabel = this.props.walletMnemonic 
    }
console.log(walletLabel)

    return (
      <div>
        <Navbar fluid componentClass="header" className="bs-docs-nav" role="banner">
          <Navbar.Header>
            {brand}
          </Navbar.Header>
          <Navbar.Collapse className="bs-navbar-collapse" >
            <Nav role="navigation" id="top" pullRight>
              <NavItem className={(walletLabel) ? null : 'hidden'}>
                Wallet: {this.props.walletMnemonic}
              </NavItem>
              <NavItem className={(walletLabel) ? 'hidden' : null} onClick={openModal}>
                Open or Create a Wallet
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <Nav bsStyle="pills" stacked activeKey={activeKey}>
              {sidebar}
            </Nav>
          </div>
          <div className="col-sm-9 col-md-10 main">
          {this.props.children}
          </div>
        </div>
        <ConnectedLoginModal show={this.state.loginModalOpen} onHide={closeModal} />
      </div>
    );
  },

  renderSideItem(link) {
    let eventKey = SIDE_LINKS.indexOf(link)

    return (
      <NavItem key={eventKey} 
        eventKey={eventKey}
        href={link.link} 
        disabled={link.disabled}>{link.title}</NavItem>
      );
  },

  renderTopItem(linkName) {
    let link = NAV_LINKS[linkName];

    return (
        <li className={this.props.activePage === linkName ? 'active' : null} key={linkName}>
          <Link to={link.link}>{link.title}</Link>
        </li>
      );
  }
});

export default connect( mapStateToProps )(NavMain)
