import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        // onChange={this.handleChange}
      />
    </label>
  );
};
