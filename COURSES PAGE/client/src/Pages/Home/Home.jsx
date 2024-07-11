import React from 'react';
import styles from './Home.module.css';
import Modal from '../../Components/Modal/Modal'
import { useNavigate } from 'react-router-dom';
import fotoHeader from '../../Images/8.jpg'
import fotoHeader2 from '../../Images/10.jpg'

const Home = () => {
  const navigate = useNavigate();
  const handlerButton = () => {
navigate('/login');
  };

  return (
    <>
{/* <Modal text={'נרשמת בהצלחה!'} type={''}/> */}
      <div className={styles.header}>
        <div>
          <div className={styles.img}>
            <img src={fotoHeader} alt="" />
          </div>
          <div className={styles.Overlay}></div>
        </div>
        <div className={styles.HeaderContent}>
          <h6>
          "מבצעים מיוחדים על מיטב הקורסים שלנו לרגל ההשקה!"
          </h6>
          <button className={styles.btn} onClick={handlerButton}>
          קרא עוד והצטרף אלינו
          </button>
        </div>
      </div>

      {/* Second Header -foto de separacion*/}
      {/* <div className={styles.second_header}>
        <div>
          <img src={fotoHeader2}  alt="" />
        </div>
        <div className={styles.Overlay}></div>
      </div> */}
    </>
  );
};

export default Home;
