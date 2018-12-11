import React from 'react';
import { Button } from 'primereact/button';
import './ListBox.css';

const ListBox = ({ value, options, onChange }) => {
  return (
    <div className='listbox'>
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
  button: {
    margin: '5px'
  }
};

export default ListBox;
