// import { Component } from 'react';
// import { nanoid } from 'nanoid';

// import {
//   Btn,
//   Form,
//   InputForm,
//   LabelForm,
// } from 'components/ContactForm/ContactForm.styled';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   // contactId = nanoid();

//   handleChange = evt => {
//     // console.log(evt.target.name);
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     // console.log(this.state);
//     this.props.onSubmitClick({ ...this.state, id: nanoid(7) });
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     // console.log(this.contactId);

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <h2>Phonebook</h2>
//         <LabelForm htmlFor="">
//           Name
//           <InputForm
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             pattern="^[A-Za-zА-Яа-я]{1}[A-Za-zА-Яа-я-\'\s]*[A-Za-zА-Яа-я]{1}$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </LabelForm>
//         <LabelForm htmlFor="">
//           Number
//           <InputForm
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//             pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </LabelForm>
//         <Btn type="submit">Add contact</Btn>
//       </Form>
//     );
//   }
// }
