import React, { Component } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList"
import {Filter} from "./Filters/Filter"
import { Container, Title } from './App.styled'
import { GlobalStyle } from "GlobalStyle";

export class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
filter: ''
}

addContact = (newContact) => {
	this.setState((prevState) => ({
		contacts: [...prevState.contacts, newContact]
}));
};

deleteContact = (id) => {
	this.setState((prevState) => ({
		contacts: prevState.contacts.filter((contact) => contact.id !== id)
}));
};

setFilter = (filterValue) => {
	this.setState({
		filter: filterValue
});
};

filteredContacts = () => {
	const { contacts, filter } = this.state;
		return contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
);
}
render() {
	const { contacts, filter } = this.state;

return (
	<Container>
		<Title>Phonebook</Title>
		<ContactForm addContact={this.addContact} contacts={contacts} />

		<Title>Contacts</Title>
		<Filter filter={filter} setFilter={this.setFilter} />
		<ContactList contacts={this.filteredContacts()} deleteContact={this.deleteContact} />
		<GlobalStyle />
	</Container>
);
}
}
