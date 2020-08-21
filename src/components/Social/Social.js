import React from 'react'
import styles from './Social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Social = (props) => { 

  const classes = props.className ? `${props.className} ${styles.socialIcons}`: styles.socialIcons;

    return <div className={classes}>
    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
    <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
  </div>
}

export default Social