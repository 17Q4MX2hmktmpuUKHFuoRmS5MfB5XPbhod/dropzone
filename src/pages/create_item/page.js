import React from "react";
import styles from "./style.css";

import NavMain from '../../common/components/NavMain';

import { Col, Row, Button, Breadcrumb, BreadcrumbItem, Input, Panel } from 'react-bootstrap';

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
              <Input label="Expires In" help="(Note that all times are approximate due to variability in Bitcoin mining.)" wrapperClassName="wrapper">
                <Row>
                  <Col xs={3}>
                    <input type="text" className="form-control" placeholder="Units" value="28"/>
                  </Col>
                  <Col xs={3}>
                    <select type="select" className="form-control" label="Expires In Units" className="form-control">
                      <option value="days" selected>Days</option>
                      <option value="hours">Hours</option>
                      <option value="blocks">Blocks</option>
                    </select>
                  </Col>
                </Row>
              </Input> 
              <Input type="text" label="Latitude" />
              <Input type="text" label="Longitude" />
              <Input type="text" label="Radius" addonAfter="km"/>
              <Button bsStyle="danger">Post your listing!</Button>
            </form>
          </div>
          <div className='col-md-4'>
            <Panel header='Tips for a Successful Post'>
              <ul>
                <li>Be clear about what you're selling, and how it will be delivered</li>
                <li>Use hashtags! They'll make it easier for people to find your listing</li>
                <li>Long descriptions are useful, but too long will prevent the listing from being confirmed.</li>
                <li>Definately include an image! But be sure the image url points direct to an image and not to a web page</li>
                <li>Use a url shortner for links and images.</li>
                <li>Don't be greedy! And never go #fullethereum.</li>
                <li>Stay safe when posting. Use tor, and tails. See the help page for more.</li>
              </ul>
            </Panel>
          </div>
        </div>
      </NavMain>
    )
  }
}
