import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button, Breadcrumb, BreadcrumbItem, Table } from 'react-bootstrap';

export default class ListingPage extends React.Component {
  componentDidMount() {
    this.setState({
      listingId: this.props.params.txId
    })
  }

  render() {
    let listingId = (this.state) ? this.state.listingId : null

    let listing = { block: 404262, 
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

    return (
      <NavMain activePage="listings">
        <div className="row">
          <div className='col-md-12'>
            <h1>Drop Zone Listing</h1>
          </div>
          <div className='col-md-11'>
           <Breadcrumb>
              <BreadcrumbItem href="#/">
                Home
              </BreadcrumbItem>
              <BreadcrumbItem href="#/listings">
                Listings
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {listingId}
              </BreadcrumbItem>
            </Breadcrumb> 
          </div>
        </div>
        <div className="row">
          <div className='col-md-7'>
            <p>
              Posted:&nbsp;
              {listing.blockDateTimeInHuman}&nbsp;
              (Block: <a href="#">{listing.blockHeightInHuman}</a>)
            </p>
            <p className={styles.description}>{listing.description}</p>
            <p className={styles.price}>{listing.priceInHuman}</p>
            <Button bsStyle="danger">Discuss & Buy!</Button>


            <h4 className={styles.spaceHeader}>Item Location (approx):</h4>
            <p>{listing.locationInHuman} (39° 49' 41.52'' N 98° 34' 46.2'' W)</p>
            <p>Radius: 100km</p>
            <p><a href="#">Click to see on OpenMaps</a></p>

            <h4 className={styles.spaceHeader}>About the Seller:</h4>
            <p><a href="#">{listing.seller}</a></p>
            <Table striped condensed>
            <thead>
              <tr>
                <th>Review</th>
                <th>Buyer</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8 / 8 / 8</td>
                <td>1JDogHf84xAVePxwDTY3XwJna3tfe3AfHH</td>
                <td><a href="#">Received product! This hat is awesome!</a></td>
              </tr>
              <tr>
                <td>8 / 8 / 8</td>
                <td>1JDogHf84xAVePxwDTY3XwJna3tfe3AfHH</td>
                <td><a href="#">Received product! This hat is awesome!</a></td>
              </tr>
              <tr>
                <td>8 / 8 / 8</td>
                <td>1JDogHf84xAVePxwDTY3XwJna3tfe3AfHH</td>
                <td><a href="#">Received product! This hat is awesome!</a></td>
              </tr>
              <tr>
                <td>8 / 8 / 8</td>
                <td>1JDogHf84xAVePxwDTY3XwJna3tfe3AfHH</td>
                <td><a href="#">Received product! This hat is awesome!</a></td>
              </tr>
              <tr>
                <td>8 / 8 / 8</td>
                <td>1JDogHf84xAVePxwDTY3XwJna3tfe3AfHH</td>
                <td><a href="#">Received product! This hat is awesome!</a></td>
              </tr>
            </tbody>
            </Table>
            <p><a href="#">Click for more reviews</a></p>

          </div>
          <div className='col-md-4'>
            <img src={listing.thumbnail} width="350" height="350"/>
          </div>
        </div>
      </NavMain>
    )
  }
}
