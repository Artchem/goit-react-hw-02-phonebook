import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 350px;
  padding: 10px;
  margin-bottom: 40px;
  border: 1px solid grey;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const InputForm = styled.input`
  width: 300px;
  padding: 5px;
  font-size: 16px;
`;

export const Btn = styled.button`
  display: inline-block;
  max-width: 100px;
  font-size: 16px;
  padding: 5px;
  margin-right: 10px;
  border-radius: 4px;
`;
