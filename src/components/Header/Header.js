import React from 'react'
import Section from '../Section/Section'
import styles from './Header.module.scss';

const Header = () => {
  return <Section>
      <header className={styles.header}>
        <div>
            <img src="https://1.bp.blogspot.com/-NhcYL98i76k/XvpeZSXtjeI/AAAAAAAAATI/2ub0KKgcHf40sDKZbi9FWv1Z9xZdrrdmgCK4BGAsYHg/logo.png" alt="logo" />
        </div>
        <nav>
            <ul>
            <li><a href="#" alt="home">Home</a></li>
            <li><a href="#" alt="about">About</a></li>
            <li><a href="#" alt="blog">Blog</a></li>
            <li><a href="#" alt="contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  </Section>
}

export default Header