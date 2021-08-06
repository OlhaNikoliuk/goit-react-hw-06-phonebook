import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import { CustomForm, Label, Input, Button } from './ContactForm.styled';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(contactsActions.addContact(name, number));
    // onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <CustomForm onSubmit={onFormSubmit} autoComplete='off'>
        <Label>
          <FaUserAlt size='16' />
          Name
          <Input
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onInputChange}
            value={name}
            placeholder='Rosie Simpson'
            autoFocus
          />
        </Label>
        <Label>
          <FaPhoneAlt size='16' />
          Phone
          <Input
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
            required
            onChange={onInputChange}
            value={number}
            placeholder='38(***) *** ****'
          />
        </Label>
        <Button>Add Contact</Button>
      </CustomForm>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(contactsActions.addContact(name, number)),
// });
// export default connect(null, mapDispatchToProps)(ContactForm);

export default ContactForm;