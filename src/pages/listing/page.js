import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

export default class ListingPage extends React.Component {
  componentDidMount() {
    this.setState({
      listingId: this.props.params.txId
    })
  }

  render() {
    let listingId = (this.state) ? this.state.listingId : null
    return (
      <NavMain activePage="listings">
        <div className="row">
          <div className='col-md-12'>
            <h1>Drop Zone Listing</h1>
          </div>
          <div className='col-md-11'>
           <Breadcrumb>
              <BreadcrumbItem href="/">
                Home
              </BreadcrumbItem>
              <BreadcrumbItem href="/listings">
                Listings
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {listingId}
              </BreadcrumbItem>
            </Breadcrumb> 
            <p>todo: Image on right, description on left, Seller deets after</p>
          </div>
        </div>
      </NavMain>
    )
  }
}
