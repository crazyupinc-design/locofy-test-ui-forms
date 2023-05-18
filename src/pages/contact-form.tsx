import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import styles from "./contact-form.module.css";
const ContactForm: FunctionComponent = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <b className={styles.h2GetInTouch}>Get in touch</b>
          <div className={styles.letUsKnow}>Let us know how we can help</div>
        </div>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <div className={styles.formBlockLabel}>Name</div>
            <TextField
              className={styles.formTextInput}
              color="primary"
              variant="outlined"
              type="text"
              label="Your full name"
              placeholder="Your full name"
              size="medium"
              margin="none"
            />
          </div>
          <div className={styles.textareaWrapper}>
            <div className={styles.formBlockLabel}>Email</div>
            <TextField
              className={styles.formTextInput}
              color="primary"
              variant="outlined"
              type="text"
              label="me@company.com"
              placeholder="me@company.com"
              size="medium"
              margin="none"
            />
          </div>
          <div className={styles.textareaWrapper}>
            <div className={styles.formBlockLabel}>Message</div>
            <input
              className={styles.formTextarea}
              type="text"
              placeholder="Your message..."
              maxLength={100}
              required
            />
          </div>
          <button className={styles.formButton}>
            <div className={styles.sendMessage}>Send message</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
