import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

export default class SellersPage extends React.Component {
  render() {
    let seller = {
      address: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqoti',
      alias: 'Ben Franklin',
      description: 'I sell \'dem #benjamins, #cash #money son.',
      identity: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqoti', // identity transfer, consult whitepaper on what this means
      listings: '',
      thumbnail: 'http://sherly.mobile9.com/download/media/210/gangsta_7n68ptzn.jpg',
      blockHeight: 404260,
      blockHeightInHuman: '404,260',
      blockDateTimeInHuman: 'Saturday, March 26th, 2016',
      locationInHuman: 'United States'
    }

    let seller2 = Object.assign({}, seller, {address: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqxyz', alias:'Alex Hamilton', thumbnail: 'http://image.blingee.com/images15/content/output/000/000/000/45a/282642489_74461.gif',
     description: 'I sell hard #cash in $10 bills yo.', identity: '14zBTbnhzHjdAKkaR4J9kCPiyVyNoaqxyz'})

    let sellers = [seller, seller2].map(this.renderSellers)
    
    return (
      <NavMain activePage="sellers">
        <div className="row">
          <div className={'col-md-12 '+styles.post_a_listing}>
            <h1>Drop Zone Sellers</h1>
            <Button bsStyle="danger" href="#">Create Seller Profile</Button>
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
          <img src={seller.thumbnail} height="200" width="200" />
        </div>
        <div className={'col-md-8 '+styles.alias}>
          {seller.alias}
        </div>
        <div className={'col-md-8 '+styles.seller_address}>Address:
           <a href={sellerDetailUrl}>  {seller.address}</a>
        </div>
        <div className={'col-md-8 '+styles.description}>
          {seller.description}
        </div>
        <div className={'col-md-8 '+styles.location}>
          {seller.locationInHuman}
        </div>
        <div className={'col-md-8 '+styles.see_more}>
          <a href={sellerDetailUrl}>See Full Profile</a>
        </div>
      </div>
    );
  }


}
