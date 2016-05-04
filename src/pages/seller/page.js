import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button, Breadcrumb, BreadcrumbItem, Table } from 'react-bootstrap';

export default class SellerPage extends React.Component {
  componentDidMount() {
    this.setState({
      listingId: this.props.params.slId;  // check what ID to use
    })
  }

  render() {

    return (
      <NavMain activePage="listings">
        <div className="row">
          <div className='col-md-12'>
            <h1>Drop Zone Seller</h1>
          </div>
          <div className='col-md-11'>
           <Breadcrumb>
              <BreadcrumbItem href="#/">
                Home
              </BreadcrumbItem>
              <BreadcrumbItem href="#/listings">
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
              Seller Created:&nbsp;
              {seller.blockDateTimeInHuman}&nbsp;
              (Block: <a href="#">{seller.blockHeightInHuman}</a>)
            </p>
            <p className={styles.address}>{seller.address}</p>
            <p className={styles.alias}>{seller.alias}</p>
            <p className={styles.description}>{seller.description}</p>
            <Button bsStyle="danger">Message Seller</Button>


            <h4 className={styles.spaceHeader}>Seller's Items for Sale:</h4>
            <p><a href="#">{seller.listings}</a></p>
            <Table striped condensed>
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Location</th>
                <th>Date Listed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{seller.listing.description}</td>
                <td>{seller.listing.locationInHuman}</td>
                <td>{seller.listing.blockDateTimeInHuman}</td>
              </tr>
            </tbody>
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
}
