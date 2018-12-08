import React from 'react';
import { Button } from 'primereact/button';
import './ListBox.css';

const ListBox = ({ value, options, onChange }) => {
  return (
    <div className='listbox' style={style.container}>
      {options.map((option, index) => {
        return (
          <React.Fragment key={index}>
            <Button
              style={style.button}
              label={option.value}
              className={
                value === option.value
                  ? 'p-button-primary'
                  : 'p-button-secondary'
              }
              onClick={() => {
                console.log('click');
                onChange(option.value);
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '20px 5px 30px 5px'
  },
  button: {
    margin: '5px'
  }
};

export default ListBox;
