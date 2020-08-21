import React from 'react'
import Section from '../Section/Section';
import styles from './HomeSection.module.scss';
import Social from '../Social/Social';

const HomeSection = () => {
  return <div className={styles.homeContainer}>
      <Section>
        <p>Hey, i'm</p>
        <p className={styles.name}>Tarun Chine</p>
        <Social />
      </Section>
  </div>
}

export default HomeSection