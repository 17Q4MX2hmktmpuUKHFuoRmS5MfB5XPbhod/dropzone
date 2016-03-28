import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Button, Breadcrumb, BreadcrumbItem, Input, Panel } from 'react-bootstrap';

export default class CreateItemPage extends React.Component {
  render() {
    return (
      <NavMain activePage="create_item">
        <div className="row">
          <div className='col-md-7'>
            <h1>Post A Listing</h1>
          </div>
          <div className='col-md-7'>
            <p>All funds received will be
            in bitcoin. And rememeber - Markets are efficient!</p>
            <form>
              <Input type="textarea" label="Description" placeholder="Enter the items description" />
              <Input type="text" label="Price" addonBefore="$" placeholder="0.00" />
              <Input type="text" label="Expires In" placeholder="blocks TODO: hours or days?"/>
              <Input type="text" label="Latitude" />
              <Input type="text" label="Longitude" />
              <Input type="text" label="Radius" addonAfter="km"/>
              <Button bsStyle="danger">Post your listing!</Button>
            </form>
          </div>
          <div className='col-md-4'>
            <Panel header='Tips for a Successful Post'>
                  Panel content
            </Panel>
          </div>
        </div>
      </NavMain>
    )
  }
}
