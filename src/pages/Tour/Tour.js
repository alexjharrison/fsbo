import './Tour.css';
import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Floor from '../../components/Floor/Floor';

class Tour extends Component {
  state = {};
  render() {
    return (
      <div id='tour'>
        <h1>Tour</h1>
        <TabView>
          <TabPanel header='Main Level'>
            <Floor floor={'MainLevel'} />
          </TabPanel>
          <TabPanel header='Second Level'>
            <Floor floor={'SecondLevel'} />
          </TabPanel>
          <TabPanel header='Lower Level'>
            <Floor floor={'LowerLevel'} />
          </TabPanel>
          <TabPanel header='Exterior'>
            <Floor floor={'Exterior'} />
          </TabPanel>
        </TabView>
      </div>
    );
  }
}

export default Tour;
