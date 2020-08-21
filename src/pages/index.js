import React from "react"
import { Header, HomeSection, AboutSection, PostSection, ContactSection } from '../components'

import '../styles/index.scss';

export default function IndexPage() {
  return <div>
    <Header/>
    <HomeSection />
    <AboutSection />
    <PostSection />
    <ContactSection />
  </div>
}
