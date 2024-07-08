import React from 'react';
import { useNavigate } from 'react-router-dom';
import courses from '../Course/coursesData'; 
import styles from './Courses.module.css';

const Courses = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className={styles.DetailsContainer}>
      <div className={styles.details}>
        {courses.map((course, index) => ( 
          <div key={index} className={styles.box} onClick={() => handleClick(course.id)}> 
            <img src={course.img} alt={course.title} />
            <div className={styles.box_content}>
              <div className={styles.title}>
              <h6>{course.title}</h6>
              </div>
              <div className={styles.description}>
              <p>
                {course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}
              </p> 
              </div>
            </div>
            <div className={styles.courseBtn}>
              <div handleClick={handleClick} className={styles.btn}>
                <>קרא עוד</>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
