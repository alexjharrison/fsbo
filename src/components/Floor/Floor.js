import './Floor.css';
import React, { Component } from 'react';
import { ListBox } from 'primereact/listbox';
import HouseData from '../../HouseData.json';

class Floor extends Component {
  state = {
    currentRoom: '',
    options: HouseData[this.props.floor].map(floor => {
      return {
        label: floor.room.split(' (')[0],
        value: floor.room
      };
    }),
    features: []
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
    let newFeatures = floor.filter(roomInfo => roomInfo.room === newRoom)[0]
      .features;

    if (oldFeatures !== newFeatures) {
      this.setState({ features: newFeatures });
    }
  }
  onRoomChange(e) {}
  render() {
    return (
      <div className='floor'>
        <ListBox
          value={this.state.currentRoom}
          options={this.state.options}
          onChange={e => this.setState({ currentRoom: e.value })}
        />
        <ul>
          {this.state.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <img src='https://picsum.photos/800/600?random' alt='roompic' />
      </div>
    );
  }
}

export default Floor;
