import React from "react";

export default class NewUserForm extends React.Component {
  state = {
    name: '',
    years: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, years } = this.state;

    if(name.trim() === '' || years === '') {
      alert('Niste unijeli ime i/ili godne korisnika!');
      return;
    }

    this.props.onAddUser(name, years);

    this.setState({
      name: '',
      years: ''
    })
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleYearsChange = event => {
    this.setState({
      years: event.target.value
    });
  }

  render() {
    const { name, years } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Dodavanje novog korisnika</h2>

        <div>
          <label>Ime: </label>
          <input
            type="text"
            value={name}
            placeholder="Unesite Ime"
            onChange={this.handleNameChange}
          />
        </div>

        <br />

        <div>
          <label>Godine: </label>
          <input
            type="number"
            value={years}
            placeholder="Unesite Godine"
            onChange={this.handleYearsChange}
            min='0'
          />
        </div>

        <br />

        <button type="submit">Dodaj korisnika</button>
      </form>
    );
  }
}