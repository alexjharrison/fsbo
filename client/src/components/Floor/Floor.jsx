import './Floor.css';
import React, { Component } from 'react';
import ListBox from '../Listbox/ListBox';
import HouseData from '../../HouseData.json';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

class Floor extends Component {
  state = {
    currentRoom: '',
    options: HouseData[this.props.floor].map(floor => {
      return {
        label: floor.room.split(' (')[0],
        value: floor.room
      };
    }),
    features: [],
    images: []
  };
  componentDidMount() {
    this.setState({
      currentRoom: this.state.options[0].value
    });
  }
  componentDidUpdate() {
    let floor = HouseData[this.props.floor];
    let newRoom = this.state.currentRoom;
    let oldFeatures = this.state.features;
    if (!floor.filter(roomInfo => roomInfo.room === newRoom)[0]) {
      return;
    }
    let roomInfo = floor.filter(roomInfo => roomInfo.room === newRoom)[0];
    let newFeatures = roomInfo.features;
    let photos = roomInfo.images.map(imageName => {
      return {
        original: `/carousel/full/${imageName}`,
        thumbnail: `/carousel/thumb/${imageName}`
      };
    });

    if (oldFeatures !== newFeatures) {
      this.setState({
        features: newFeatures,
        images: photos
      });
    }
    console.log(this.state.images);
  }
  importImages(r) {
    let images = {};
    r.keys.map((item, index) => {
      images[item.replace('./', '')] = r(item);
      return null;
    });
    return images;
  }
  render() {
    return (
      <React.Fragment>
        <ListBox
          value={this.state.currentRoom}
          options={this.state.options}
          onChange={value => this.setState({ currentRoom: value })}
        />
        <div className='floor'>
          <div>
            <h1 style={{ textAlign: 'center' }}>{this.state.currentRoom}</h1>
            <ul id='features'>
              {this.state.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className='image-gallery'>
            <ImageGallery
              items={this.state.images}
              autoPlay={true}
              slideDuration={1200}
              slideInterval={3500}
              thumbnailPosition={'top'}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Floor;
