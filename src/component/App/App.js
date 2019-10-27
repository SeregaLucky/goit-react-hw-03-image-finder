/* import - node_modules */
import React, { Component } from 'react';
/* import - CSS */
import styles from './App.module.css';
/* import - COMPONENT */
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
/* import - other */
import fetchPhotos from '../../servises/api';

/*
 * COMPONENT
 */
class App extends Component {
  state = {
    items: [],
    findWord: '',
    pageNumber: 1,
    isModalOpen: false,
    idClickPhoto: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { findWord } = this.state;

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });

    if (prevState.findWord === findWord) return;

    this.fetchGetPhotos();
  }

  fetchGetPhotos = () => {
    fetchPhotos(this.state.findWord, this.state.pageNumber)
      .then(hits =>
        this.setState(state => ({
          items: [...state.items, ...hits],
          pageNumber: state.pageNumber + 1,
        })),
      )
      .catch(error => this.setState({ error }));
  };

  resetOldStateAndWriteNewData = findWord => {
    if (findWord === this.state.findWord) return;

    this.setState({
      items: [],
      pageNumber: 1,
      findWord,
    });
  };

  openModal = id => {
    this.setState({ isModalOpen: true, idClickPhoto: id });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, idClickPhoto: '' });
  };

  render() {
    const { items, isModalOpen, idClickPhoto, error } = this.state;

    const needItem = items.filter(item => item.id === idClickPhoto);

    return (
      <div className={styles.app}>
        <SearchForm onWriteFindWord={this.resetOldStateAndWriteNewData} />
        <Gallery items={items} onOpenModal={this.openModal} />

        {isModalOpen && (
          <Modal
            url={needItem[0].largeImageURL}
            onCloseModal={this.closeModal}
          />
        )}

        {error && <psan>Произошла ошибка.</psan>}

        {items.length > 0 && (
          <button
            type="button"
            onClick={this.fetchGetPhotos}
            className={styles.button}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
