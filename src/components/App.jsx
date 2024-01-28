import React, { Component } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList"

import initialContacts from './contacts.json';

import {Filter} from "./Filter/Filter"
import { Container, Title } from './App.styled'
import { GlobalStyle } from "GlobalStyle";


const storageKey = 'contacts';

export class App extends Component {
	state = {
		contacts: initialContacts,
		filter: '',
};

componentDidMount() {
	const savedContacts = window.localStorage.getItem(storageKey);
		if (savedContacts !== null) {
		this.setState({
		contacts: JSON.parse(savedContacts),
});
}
}

componentDidUpdate(prevProps, prevState) {
	if (prevState.contacts !== this.state.contacts) {
			window.localStorage.setItem(
			storageKey,
			JSON.stringify(this.state.contacts)
);
}
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
