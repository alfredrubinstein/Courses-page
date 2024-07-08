import React from 'react';
import user from './userData';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const { name, email, registeredCourses, stats, notifications } = user;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>משתמש רשום: <input type='text' placeholder={name} className={styles.input} /></h2>
        <div className={styles.output}>
          <button className={styles.logoutBtn}>יציאה</button>
        </div>
      </header>

      <main className={styles.grid}>
        <section className={styles.gridItem}>
          <h3>סטטיסטיקות</h3>
          <div className={styles.stats}>
            {stats.map(stat => (
              <div key={stat.id} className={styles.statItem}>
                <h4>{stat.value} :</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.gridItem}>
          <h3>הודעות</h3>
          <div className={styles.notifications}>
            {notifications.map(notification => (
              <div key={notification.id} className={styles.notification}>
                <p>{notification.message}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.gridItem}>
          <h3>קורסים שנרשמתה אליהם</h3>
          <div className={styles.courses}>
            {registeredCourses.map(course => (
              <div key={course.id} className={styles.courseCard}>
                <img src={course.imageUrl} alt={course.name} className={styles.courseImage} />
                <div className={styles.courseCardBody}>
                  <h5>{course.name}</h5>
                  <p>{course.title}</p>
                  <button className={styles.btn}>פתח קורס</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
