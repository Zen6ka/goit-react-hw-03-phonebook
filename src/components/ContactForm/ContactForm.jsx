import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Form, Input, Button, Text } from './ContactForm.styled';

export class ContactForm extends Component {
  
	state = {
			name: '',
			number: ''    
  }

handleNameChange = (evt) => {
	this.setState({
		name: evt.target.value,
});
};

handleNumberChange = (evt) => {
	this.setState({
		number: evt.target.value,
});
};

handleSubmit = (evt) => {
	evt.preventDefault();
		const { name, number } = this.state;
		const { addContact, contacts } = this.props;

			if (name.trim() === '' || number.trim() === '') {
			return;
}

const existingContact = contacts.find(
(contact) => contact.name.toLowerCase() === name.toLowerCase()
);
		if (existingContact) {
		Notiflix.Report.warning(
		'Alert',
		`Contact with name "${name}" already exists!`,
		'Ok'
);
return;
}

const newContact = {
	id: nanoid(),
	name: name.trim(),
	number: number.trim(),
};

addContact(newContact);
	this.setState({
		name: '',
		number: '',
});
};

render() {
	const { name, number } = this.state;

		return (
			<Form onSubmit={this.handleSubmit}>
				<Text>Name</Text>
					<Input
					type="text"
					name="name"
					// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={name}
					onChange={this.handleNameChange}
					/>
				<Text>Number</Text>
					<Input
					type="tel"
					name="number"
					// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					value={number}
					onChange={this.handleNumberChange}
					/>
						<Button type="submit">Add Contact</Button>
				</Form>
);
}
}