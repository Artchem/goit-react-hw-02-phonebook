import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import { Btn, LabelForm } from 'components/ContactForm/ContactForm.styled';

const initialValues = { name: '', number: '' };

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberPattern =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = object().shape({
  name: string()
    .max(20)
    .matches(namePattern, {
      message:
        "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
    })
    .required(),
  number: string()
    .min(3)
    .matches(numberPattern, {
      message:
        'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
    })
    .required(),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    // console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Phonebook</h2>
        <LabelForm htmlFor="">
          Name
          <Field
            type="text"
            name="name"
            // value={this.state.name}
            // onChange={this.handleChange}
            // pattern="^[A-Za-zА-Яа-я]{1}[A-Za-zА-Яа-я-\'\s]*[A-Za-zА-Яа-я]{1}$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <ErrorMessage name="name" component="div" />
        </LabelForm>
        <LabelForm htmlFor="">
          Number
          <Field
            type="tel"
            name="number"
            // value={this.state.number}
            // onChange={this.handleChange}
            // pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <ErrorMessage name="number" component="div" />
        </LabelForm>
        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
};

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

// return (
//   <Formik>
//     <Form onSubmit={this.handleSubmit}>
//       <h2>Phonebook</h2>
//       <LabelForm htmlFor="">
//         Name
//         <InputForm
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//           pattern="^[A-Za-zА-Яа-я]{1}[A-Za-zА-Яа-я-\'\s]*[A-Za-zА-Яа-я]{1}$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </LabelForm>
//       <LabelForm htmlFor="">
//         Number
//         <InputForm
//           type="tel"
//           name="number"
//           value={this.state.number}
//           onChange={this.handleChange}
//           pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </LabelForm>
//       <Btn type="submit">Add contact</Btn>
//     </Form>
//   </Formik>
// );
//   }
// }
