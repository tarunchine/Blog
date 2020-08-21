import React from 'react'
import Section from '../Section/Section';
import styles from './ContactSection.module.scss';
import Social from '../Social/Social';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faAt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return <div className={styles.contactContainer}>
    <Section title="Contact Me">
      <div className={styles.contactSectionDetails}>
        <form className={styles.form}>
          <div className={styles.formfieldContainer}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <textarea placeholder="Message" ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className={styles.contactDetails}>
          <div className={styles.contactDetail}>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <p>Bangalore(India)</p>
          </div>
          <div className={styles.contactDetail}>
            <FontAwesomeIcon icon={faAt} />
            <p>chine.tarun@gmail.com</p>
          </div>
          <div className={styles.contactDetail}>
            <FontAwesomeIcon icon={faMobileAlt} />
            <p>+91-8105464394</p>
          </div>

          <Social className={styles.socialIcons} />
        </div>
      </div>
    </Section>
  </div>
}

export default ContactSection