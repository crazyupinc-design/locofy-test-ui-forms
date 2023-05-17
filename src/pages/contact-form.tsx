import { FunctionComponent } from "react";
import styles from "./contact-form.module.css";
const ContactForm: FunctionComponent = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <b className={styles.h2GetInTouch}>Get in touch</b>
          <div className={styles.letUsKnow}>Let us know how we can help</div>
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.inputWrapper}>
              <div className={styles.formBlockLabel}>Name</div>
              <div className={styles.formTextInput}>
                <div className={styles.yourFullName}>Your full name</div>
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.formBlockLabel}>Email</div>
              <div className={styles.formTextInput1}>
                <div className={styles.mecompanycom}>me@company.com</div>
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.formBlockLabel}>Message</div>
              <div className={styles.formTextarea}>
                <div className={styles.yourFullName}>Your message...</div>
              </div>
            </div>
            <div className={styles.formButton}>
              <div className={styles.yourFullName}>Send message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
