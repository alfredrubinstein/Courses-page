import React from "react";
import ContactHeader from "../../Images/7.jpg";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      {/* <div className={styles.Contact}>
        <img src={ContactHeader} alt="" />
      </div> */}

      {/* Contact Form */}
      <div className={styles.Contact_form}>
        <div className={styles.row}>
          <div className={styles["col-sm-9"]}>
            <form action="">
              <h6>צור איתנו קשר עכשיו</h6>
              <div className={styles["form-group"]}>
                <label htmlFor="name">שם</label>
                <input
                  type="text"
                  id="name"
                  className={styles["form-control"]}
                  placeholder="השם שלך"
                  required
                />
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="email">אמייל</label>
                <input
                  type="email"
                  id="email"
                  className={styles["form-control"]}
                  placeholder="האמייל שלך"
                  required
                />
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="phone">מס' טלפון</label>
                <input
                  type="number"
                  id="phone"
                  className={styles["form-control"]}
                  placeholder="הכנס מספר טלפון"
                  required
                />
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="message">איך נוכל לעזור</label>
                <textarea
                  rows="6"
                  id="message"
                  className={styles["form-control"]}
                  required
                  placeholder="איך נוכל לעזור"
                ></textarea>
              </div>

              <button className={styles.btn}>שלח עכשיו</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
