import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

export default class SellersPage extends React.Component {
  render() {

    return (
      <NavMain activePage="listings">
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
    let sellerDetailUrl = `#/sellers/${seller.txid}`;

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
          Seller: {listing.seller}
        </div>
        <div className="col-md-8">
          Block: {listing.blockHeightInHuman}
        </div>
        <div className="col-md-8">
          <a href={sellerDetailUrl}>See Full Profile</a>
        </div>
      </div>
    )
  }


}
