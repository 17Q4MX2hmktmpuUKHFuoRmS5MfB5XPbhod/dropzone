import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button } from 'react-bootstrap';

export default class ListingsPage extends React.Component {
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

    // TODO: Add multiple blocks:
    let listings = [junsethHat, junsethHat].map(this.renderListing)

    return (
      <NavMain activePage="listings">
        <div className="row">
          <div className={'col-md-12 '+styles.post_a_listing}>
            <h1>Recent Drop Zone Listings</h1>
            <p>Showing Listings from "Everywhere" from block 404,262 down</p>
            <Button bsStyle="danger">Post a Listing</Button>
          </div>
        </div>
        {listings}
      </NavMain>
    );
  }

  renderListing(listing) {
    let listingDetailUrl = `/listings/${listing.txid}`;

    return (
      <div className={'row '+styles.listing}>
        <div className={'col-md-4 '+styles.listing_image}>
          <img src={listing.thumbnail} />
        </div>
        <div className={'col-md-8 '+styles.listing_description}>
          <a href={listingDetailUrl}>{listing.description}</a>
        </div>
        <div className={'col-md-1 '+styles.pricing}>
          {listing.priceInHuman}
        </div>
        <div className={'col-md-8 '+styles.location}>
          {listing.locationInHuman} ({listing.radius / 1000} km)
        </div>
        <div className={'col-md-8 '+styles.blockDateTime}>
          {listing.blockDateTimeInHuman}
        </div>
        <div className="col-md-8">
          Seller: {listing.seller}
        </div>
        <div className="col-md-8">
          Block: {listing.blockHeightInHuman}
        </div>
        <div className="col-md-8">
          <a href={listingDetailUrl}>See More</a>
        </div>
      </div>
    );
  }
}

