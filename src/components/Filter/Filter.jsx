import React from 'react';
import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input onChange={onChange} type="text" name="filter" value={value} />
    </Label>
  );
};
