/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './PhotoCard.module.css';

/*
 * COMPONENT
 */
const PhotoCard = ({ item, onOpenModal }) => {
  const { id, webformatURL, likes, views, comments, downloads } = item;

  return (
    <div className={styles.photoCard}>
      <img src={webformatURL} alt="" />

      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>

      {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
      <button
        type="button"
        className={styles.fullscreenButton}
        onClick={() => onOpenModal(id)}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};

PhotoCard.propTypes = {
  item: T.shape({
    id: T.number.isRequired,
    webformatURL: T.string.isRequired,
    likes: T.number.isRequired,
    views: T.number.isRequired,
    comments: T.number.isRequired,
    downloads: T.number.isRequired,
  }).isRequired,

  onOpenModal: T.func.isRequired,
};

export default PhotoCard;
