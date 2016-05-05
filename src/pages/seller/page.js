import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button, Breadcrumb, BreadcrumbItem, Table } from 'react-bootstrap';

export default class SellerPage extends React.Component {
  componentDidMount() {
    this.setState({
      sellerId: this.props.params.address  // check what ID to use
    })
  }

  render() {
    let sellerId = (this.state) ? this.state.sellerId : null

    let seller = {
      address: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqoti',
      alias: 'junseth',
      description: 'I \'m an anarcho-miLLinerist selling hats',
      identity: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqoti', // identity transfer, consult whitepaper on what this means
      listings: '',
      thumbnail: '#',
      blockHeight: 404260,
      blockHeightInHuman: '404,260',
      blockDateTimeInHuman: 'Saturday, March 26th, 2016',
      locationInHuman: 'United States',

    }

    let junsethHat = { block: 404262,
        description: '#black #baseball-cap #Drop-Zone written on the front. Signed by #brighton36 and #junseth http://bit.ly/1k5lV6I',
        thumbnail: 'http://i.imgur.com/ZZE2VG7.jpg',
        seller: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqoti',
        txid: '73cfb35e1e6bb31b3ddffb41322c46f155970bfae3c40385b171ba02f88985a0',
        price: 3000,
        priceUnits: 'USD',
        priceInHuman: '$30.00',
        blockHeight: 404262,
        blockHeightInHuman: '404,262',
        blockDateTimeInHuman: 'Saturday, March 26th, 2016',
        lat: 39.8282,
        lon: -98.5795,
        locationInHuman: 'United States',
        radius: 999999
      }
    let junsethHat2 = Object.assign({}, junsethHat, {txid:
      '73cfb35e1e6bb31b3ddffb41322c46f155970bfae3c40385b171ba02f88985a2'})

    return (
      <NavMain activePage="sellers">
        <div className="row">
          <div className='col-md-12'>
            <h1>Drop Zone Seller</h1>
          </div>
          <div className='col-md-11'>
           <Breadcrumb>
              <BreadcrumbItem href="#/">
                Home
              </BreadcrumbItem>
              <BreadcrumbItem href="#/sellers">
                Sellers
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {sellerId}
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row">
          <div className='col-md-7'>
            <p>
              Seller Profile Created:&nbsp;
              {seller.blockDateTimeInHuman}&nbsp;
              (Block: <a href="#">{seller.blockHeightInHuman}</a>)
            </p>
            <p className={styles.address}>{sellerId}</p>
            <p className={styles.alias}>{seller.alias}</p>
            <p className={styles.description}>{seller.description}</p>
            <Button bsStyle="danger">Message Seller</Button>


            <h4 className={styles.spaceHeader}>Seller's Items for Sale:</h4>
            <Table striped condensed>
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Location</th>
                <th>Date Listed</th>
              </tr>
            </thead>
            <tbody>{seller.listings}</tbody>
            </Table>
            <p><a href="#">Click for more items</a></p>

          </div>
          <div className='col-md-4'>
            <img src={seller.thumbnail} width="350" height="350"/>
          </div>
        </div>
      </NavMain>
    )
  }

  renderListings(listing) {
    let listingDetailUrl = `#/listings/${listing.txid}`;

    return (
      <tr>
        <td><a href={listingDetailUrl}>{listing.description}</a></td>
        <td>{listing.locationInHuman}</td>
        <td>{listing.blockDateTimeInHuman}</td>
      </tr>
    );
  }
}
