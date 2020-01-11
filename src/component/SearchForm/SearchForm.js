/* import - node_modules */
import React, { Component } from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './SearchForm.module.css';

/*
 * COMPONENT
 */
class SearchForm extends Component {
  static propTypes = {
    onWriteFindWord: T.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => this.setState({ query: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.onWriteFindWord(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          name="search"
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchForm;
