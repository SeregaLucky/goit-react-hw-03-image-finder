/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Gallery.module.css';
/* import - COMPONENT */
import PhotoCard from './PhotoCard/PhotoCard';

/*
 * COMPONENT
 */
const Gallery = ({ items, onOpenModal }) => {
  const allItems = items.map(item => (
    <PhotoCard key={item.id} item={item} onOpenModal={onOpenModal} />
  ));

  return <ul className={styles.gallery}>{allItems}</ul>;
};

Gallery.propTypes = {
  items: T.arrayOf(T.shape()).isRequired,
  onOpenModal: T.func.isRequired,
};

export default Gallery;
