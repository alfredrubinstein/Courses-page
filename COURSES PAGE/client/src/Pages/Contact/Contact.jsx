import React from "react";
import { useForm } from "react-hook-form";
import styles from "./contact.module.css";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully");
  };

  return (
    <>
      {/* Contact Form */}
      <div className={styles.Contact_form}>
        <div className={styles.row}>
          <div className={styles.divIntermedio}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>צור איתנו קשר עכשיו</h6>
              <div className={styles.formControl}>
                <label htmlFor="name">שם</label>
                <input
                  type="text"
                  id="name"
                  className={styles.formControl}
                  placeholder="השם שלך"
                  {...register("name", { required: "שם חובה" })}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>

              <div className={styles.formControl}>
                <label htmlFor="email">אמייל</label>
                <input
                  type="email"
                  id="email"
                  className={styles.formControl}
                  placeholder="האמייל שלך"
                  {...register("email", { required: "אמייל חובה" })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div className={styles.formControl}>
                <label htmlFor="phone">מס' טלפון</label>
                <input
                  type="number"
                  id="phone"
                  className={styles.formControl}
                  placeholder="הכנס מספר טלפון"
                  {...register("phone", { required: "מספר טלפון חובה" })}
                />
                {errors.phone && <span>{errors.phone.message}</span>}
              </div>

              <div className={styles.formControl}>
                <label htmlFor="message">איך נוכל לעזור</label>
                <textarea
                  rows="6"
                  id="message"
                  className={styles.formControl}
                  placeholder="איך נוכל לעזור"
                  {...register("message", { required: "הודעה חובה" })}
                ></textarea>
                {errors.message && <span>{errors.message.message}</span>}
              </div>

              <button type="submit" className={styles.btn}>שלח עכשיו</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
