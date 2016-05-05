import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

export default class SellersPage extends React.Component {
  render() {

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


    let junseth = {
      address: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqoti',
      alias: 'junseth',
      description: 'I \'m an anarcho-miLLinerist selling hats',
      identity: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqoti', // identity transfer, consult whitepaper on what this means
      listings: listings,
      thumbnail: '#'
    }

    let sellers = [junseth].map(this.renderSeller)
    let listings = [junsethHat, junsethHat2].map(this.renderListing)

    return (
      <NavMain activePage="sellers">
        <div className="row">
          <div className={'col-md-12 '+styles.post_a_listing}>
            <h1>Drop Zone Sellers</h1>
          </div>
          <div className='col-md-4'>
             <Breadcrumb>
              <BreadcrumbItem href="#/">
                Home
              </BreadcrumbItem>
              <BreadcrumbItem active>
                Sellers
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className='col-md-12'>
            <p>Showing Sellers from "Everywhere"</p>
          </div>
        </div>
        {sellers}
      </NavMain>
    );
  }


  renderSellers(seller) {
    let sellerDetailUrl = `#/sellers/${seller.address}`;

    return (
      <div key={seller.address} className={'row '+styles.seller}>
        <div className={'col-md-4 '+styles.listing_image}>
          <img src={seller.thumbnail} />
        </div>
        <div className={'col-md-8 '+styles.seller_address}>
          <a href={sellerDetailUrl}>{seller.address}</a>
        </div>
        <div className={'col-md-8 '+styles.alias}>
          {seller.alias}
        </div>
        <div className={'col-md-8 '+styles.description}>
          {seller.description}
        </div>
        <div className="col-md-8">
          <a href={sellerDetailUrl}>See Full Profile</a>
        </div>
      </div>
    );
  }


}
