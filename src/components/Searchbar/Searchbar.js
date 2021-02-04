import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './Searchbar.css';

export default class Searchbar extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  
  state = {inputValue: ''};
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  handleChange = e => {
    this.setState({inputValue: e.target.value})
  }

  render () {
    const {inputValue} = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }

}

