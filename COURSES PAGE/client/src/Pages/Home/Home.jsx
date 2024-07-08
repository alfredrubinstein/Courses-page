import React from 'react';
import data from './data';
import styles from './Home.module.css';
import Modal from '../../Components/Modal/Modal'
import { useNavigate } from 'react-router-dom';

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
            <img src={data.header.img} alt="" />
          </div>
          <div className={styles.Overlay}></div>
        </div>
        <div className={styles.HeaderContent}>
          <h6>
            {data.header.title}
               </h6>
          <button className={styles.btn} onClick={handlerButton}>
            {data.header.buttonText}
          </button>
        </div>
      </div>

      {/* Second Header -foto de separacion*/}
      {/* <div className={styles.second_header}>
        <div>
          <img src={data.secondHeader.img} alt="" />
        </div>
        <div className={styles.Overlay}></div>
      </div> */}
    </>
  );
};

export default Home;
