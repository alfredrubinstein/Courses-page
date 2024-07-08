import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import courses from './coursesData';
import styles from './course.module.css';
import NotFound from '../NotFound/NotFound';

const Course = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));
const navigate=useNavigate();
  const handlerNavigate=()=>{
    navigate('/courses');
  }
  if (!course) {
    return (
      <div>
      <NotFound handlerNavigate={handlerNavigate} errorText={"חזור לדף הקורסים"}/>
    </div>
  )}

  return (
    <div className={styles.courseContainer}>
      <h1>{course.title}</h1>
      <img src={course.img} alt={course.title} />
      <div className={styles.details}>
        <p>{course.description}</p>
        <button className={styles.btn}>הרשם</button>
      </div>
    </div>
  );
};

export default Course;
