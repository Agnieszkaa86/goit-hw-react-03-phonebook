import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Input } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  state = INITIAL_STATE;

  handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.newContact(contact);
    this.resetForm();
  };

  inputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  resetForm = () => {
    this.setState(INITIAL_STATE);
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.inputChange}
              required
            />
          </label>
          <label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.inputChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </>
    );
  }
}
ContactForm.propTypes = {
  newContact: PropTypes.func.isRequired,
};

export default ContactForm;
