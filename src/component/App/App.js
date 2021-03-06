/* import - node_modules */
import React, { Component } from 'react';
/* import - CSS */
import styles from './App.module.css';
/* import - COMPONENT */
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
/* import - api */
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
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { items, findWord } = this.state;

    if (prevState.items.length !== items.length) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (prevState.findWord === findWord) return;

    this.fetchGetPhotos();
  }

  fetchGetPhotos = () => {
    this.setState({ isLoading: true });

    fetchPhotos(this.state.findWord, this.state.pageNumber)
      .then(hits =>
        this.setState(state => ({
          items: [...state.items, ...hits],
          pageNumber: state.pageNumber + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
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
    const { items, isModalOpen, idClickPhoto, isLoading, error } = this.state;

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
            disabled={isLoading}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
