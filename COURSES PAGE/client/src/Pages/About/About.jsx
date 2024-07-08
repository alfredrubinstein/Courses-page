import React from "react";
import { useNavigate } from "react-router-dom";
import AboutHeader from "../../Images/4.jpg";
import AboutImg from "../../Images/home_about.jpg";
import ProfImg from "../../Images/professors.jpg";
import TeachingImg from "../../Images/teaching.jpg";
import styles from "./about.module.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className={styles.aboutContainer}>
      <div className={styles.About_header}>

      </div>

      <div className={styles.About}>
        {/* Section 1: About Us */}
        <div className={styles.row}>
          <div className={styles.colsm5}>
            <img src={AboutImg} className={styles.imgfluid} alt="About Us" />
          </div>
          <div className={styles.colsm6}>
            <h6>הנגשת פרוייקטים לילדים מוכשרים</h6>
            <h5>אנחנו תמיד איתך...</h5>
            <p>
              ברוכים הבאים לקורסי הטכנולוגיה שלנו לילדים! בעולם-טק, אנו מחויבים
              לטפח את הסקרנות והיצירתיות של מוחות צעירים באמצעות תוכניות
              טכנולוגיה מרתקות וחינוכיות. המשימה שלנו היא להעצים ילדים עם
              הכישורים הדרושים להם כדי לשגשג בעולם דיגיטלי, ולהכין אותם להפוך
              לחדשנים ולמנהיגים של המחר.
            </p>
          </div>
        </div>

        {/* Section 2: About Our Professors */}
        <div className={styles.row}>
          <div className={styles.colsm6}>
            <h6>על המורים שלנו</h6>
            <h5>המורים המסורים שלנו...</h5>
            <p>
              המדריכים המנוסים שלנו נלהבים מטכנולוגיה וחינוך, והם מחויבים לספק
              סביבת למידה תומכת ומעוררת השראה. צוות המחנכים המיומנים שלנו מוקדש
              לעזור לכל ילד להצליח.
            </p>
          </div>
          <div className={styles.colsm5}>
            <img src={ProfImg} className={styles.imgfluid} alt="Our Professors" />
          </div>
        </div>

        {/* Section 3: About Our Teaching Method */}
        <div className={styles.row}>
          <div className={styles.colsm5}>
            <img src={TeachingImg} className={styles.imgfluid} alt="Our Teaching" />
          </div>
          <div className={styles.colsm6}>
            <h6>שיטת הלימוד שלנו</h6>
            <h5>ללמוד בכיף...</h5>
            <p>
              גישת ההוראה שלנו נועדה להפוך את הלמידה למהנה ונגישה לכל הילדים.
              אנו משתמשים בשילוב של שיעורים אינטראקטיביים, פרויקטים מעשיים
              ופעילויות שיתופיות כדי להבטיח שכל ילד יוכל ללמוד בקצב שלו ובסגנון
              שלו.
            </p>
          </div>
        </div>

        <div className={styles.btn} onClick={() => navigate("/courses")}>
          הירשם לקורסים שלנו עכשיו?
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
