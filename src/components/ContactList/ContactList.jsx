import { Btn, Item } from './ContactList.styled';

export const ContactList = ({ options, deleteContact }) => {
  // console.log(options);
  return options.map(option => (
    <Item key={option.id}>
      {option.name}: {option.number}
      <Btn onClick={() => deleteContact(option.name)} type="button">
        Delete
      </Btn>
    </Item>
  ));
};
