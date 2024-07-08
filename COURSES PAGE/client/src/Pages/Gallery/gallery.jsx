import React from 'react';
import GalleryHeader from "../../Images/9.jpg";
import styles from './gallery.module.css';
import imagesData from './imagesData';

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <img src={GalleryHeader} alt="Gallery Header" />
      </div>
<div className={styles.title}>אין כמו להתרשם באופן ישיר מהעבודות של תלמידינו!</div>
      {/* Gallery Section */}
      <div className={styles.gallery_main + ' container'}>
        <div className="row">
          {imagesData.map(image => (
            <div className="col-sm-4" key={image.id}>
              <div className={styles.box}>
               <div className={styles.titleImage}>{image.title}</div>
                <img src={image.url} className="img-fluid" alt={`Image ${image.id}`} />
                <div className={styles.description}>{image.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
