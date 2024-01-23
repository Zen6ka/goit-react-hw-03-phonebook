import { ContactItems, Contact, Button } from './ContactList.styled'

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
}

function ContactItem({ contact, deleteContact }) {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <ContactItems>
      <Contact>{contact.name}</Contact>
      <Contact>{contact.number}</Contact>
      <Button onClick={handleDelete}>Delete</Button>
    </ContactItems>
  );
}