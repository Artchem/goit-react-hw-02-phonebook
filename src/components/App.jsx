import { Component, React } from 'react';
import { Container, Text } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandle = data => {
    const contact = { id: nanoid(), ...data };
    // console.log(data);

    if (this.state.contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = evt => {
    const { value } = evt.target;
    this.setState({ filter: value });
  };

  handleDeleteContact = contactName => {
    // console.log(contactName);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== contactName
      ),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <ContactForm onSubmit={this.formSubmitHandle} />
        <h2>Contacts</h2>

        <Text>Total contacts: {this.state.contacts.length}</Text>

        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          options={visibleContacts}
          deleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}
