import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Header, Form, SearchButton, Input } from './Searchbar.styled';
import { Header, Form, SearchButton, Input } from './Searchbar.styled'


export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Type something!');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <>
        <Header>
          <Form onSubmit={this.handleSubmit}>
            <SearchButton type="submit" className="button">
              <span className="Button-label">Search</span>
            </SearchButton>

            <Input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleQueryChange}
              value={this.state.query}
            />
          </Form>
        </Header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};