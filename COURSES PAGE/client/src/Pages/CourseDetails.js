import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import './courseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = data.details.find((item) => item.id === parseInt(courseId));

  return (
    <div className="course-details container">
      {course ? (
        <>
          <img src={course.img} className="img-fluid" alt={course.title} />
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </>
      ) : (
        <p>הקורס לא נמצא!</p>
      )}
    </div>
  );
};

export default CourseDetails;
