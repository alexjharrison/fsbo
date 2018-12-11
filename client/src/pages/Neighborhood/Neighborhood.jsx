import './Neighborhood.css';
import React, { Component } from 'react';
import { Card } from 'primereact/card';

class Neighborhood extends Component {
  state = {};
  render() {
    return (
      <div className='neighborhood'>
        <div className='inner-neighbor'>
          <h1>Lake Anne & Reston, VA</h1>
          <img className='banner' src='/carousel/full/lake anne 1.jpg' alt='' />
        </div>
        <br />
        <br />
        <hr />
        <h2>A Brief History of Reston & Lake Anne</h2>
        <hr />
        <iframe
          title='youtube-reston'
          src='https://www.youtube.com/embed/Qn5eHyn51nY'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />

        <hr />
        <h2>Enjoy Neighborhood Activities</h2>
        <hr />
        <div className='activities'>
          <Card
            title='Farmers Market'
            subTitle='Saturdays Apr-Dec'
            footer={
              <a href='http://restonfarmersmarket.com'>
                RestonFarmersMarket.com
              </a>
            }
          >
            <img
              className='left-pic'
              src='/farmer_sign.jpg'
              alt='farmers market'
            />
            <div className='card-right'>
              <img src='/farm2.jpg' alt='farmers market' />
              <img src='/farm3.jpg' alt='farmers market' />
            </div>
          </Card>
          <Card
            title='Lake Anne Center'
            subTitle='Shops and Dining a Few Steps Away'
            footer={<a href='http://lakeanneplaza.com'>LakeAnnePlaza.com</a>}
          >
            <img class='card-pic' src='/lake-anne.png' alt='lake anne' />
          </Card>
          <Card
            title='Reston Town Center'
            subTitle='The Heart of the Region'
            footer={
              <a href='https://restontowncenter.com/'>RestonTownCenter.com</a>
            }
          >
            <img
              className='card-pic'
              src='/reston_fountain.jpg'
              alt='reston town center'
            />
            Card
          </Card>
        </div>
        <hr />
      </div>
    );
  }
}

export default Neighborhood;
