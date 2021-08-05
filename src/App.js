import { Toaster } from 'react-hot-toast';
import { HiUsers } from 'react-icons/hi';
import { FaAddressBook } from 'react-icons/fa';

import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import store from './redux/store';

function App() {
  const setedContacts = store.getState().contacts.items;
  return (
    <Container>
      <Toaster />
      <Section title={'Phonebook'}>
        <FaAddressBook size='24' />

        {<ContactForm /*onSubmit={addContact}*/ />}
      </Section>

      <Section title={'Contacts'}>
        <HiUsers size='26' />
        <Filter /*onChange={changeFilter} value={filter}*/ />

        {setedContacts.length !== 0 && (
          <ContactList
          /*contacts={visibleContacts}
            onDeleteContact={deleteContact}*/
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
