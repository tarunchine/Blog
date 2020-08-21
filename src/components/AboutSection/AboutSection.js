import React from 'react'
import Section from '../Section/Section';
import styles from './AboutSection.module.scss';
import Social from '../Social/Social';

const AboutSection = () => {
  return <div >
    <Section title="About Me">
      <div className={styles.content}>
        <div>
          <p className={styles.mt0}>
            I am a Frond End Developer currently based out of Bangalore, India
          </p>
          <p>
            I've been creating on the web for around 5 Years and became pretty good at it. I spend most of my time working with HTML5, CSS3, JavaScript.
          </p>
          <p>I enjoy taking complex designs and turn them into beautiful products.</p>
          <br />
          <p>
            Technologies:
          </p>
          <div className={styles.technologies}>
            <div className={styles.technology}>
              <img src="https://1.bp.blogspot.com/-lJhbu1FnzbQ/XvpeXXhbG9I/AAAAAAAAASs/CtEPWzhS26wRlAnL1MD5FEC8i_ihP6buACK4BGAsYHg/image%2B%25282%2529.png" alt="HTML" />
              <p className={styles.technologyDetails}>
                HTML
              </p>
            </div>
            <div className={styles.technology}>
              <img src="https://1.bp.blogspot.com/-h_T5hPerDX0/XvpeZPtuJfI/AAAAAAAAATE/e1OQwb5DPBArVndKXtED0w2bM-1fK3o6gCK4BGAsYHg/image%2B8.png" alt="CSS" />
              <p className={styles.technologyDetails}>
                CSS
              </p>
            </div>
            <div className={styles.technology}>
              <img src="https://1.bp.blogspot.com/-bYgG9QuGvLs/XvpeYzi_KzI/AAAAAAAAATA/Wifh7I1KubALYdRZCfgaBZCwanZYAqzHQCK4BGAsYHg/image%2B5.png" alt="JavaScript" />
              <p className={styles.technologyDetails}>
                JavaScript
              </p>
            </div>
            <div className={styles.technology}>
              <img src="https://1.bp.blogspot.com/-ozTyetBci1g/XzbZ-FV5hBI/AAAAAAAAAkg/AiKeEO901K08Zl2zr9SiQu8tZPxWMr7qgCLcBGAsYHQ/s0/-Tzadxix_400x400.png" alt="Bootstrap" />
              <p className={styles.technologyDetails}>
                Bootstrap
              </p>
            </div>
            <div className={styles.technology}>
              <img src="https://1.bp.blogspot.com/-gJ8-CaRnySQ/XvpeYSiFjwI/AAAAAAAAAS4/LTpck0EiJBccLDcpIfsJo6S57V9Vq21dQCK4BGAsYHg/image%2B3.png" alt="React" />
              <p className={styles.technologyDetails}>
                React
              </p>
            </div>
            <div className={styles.technology}>
              <img src="https://1.bp.blogspot.com/-XMwOJnqz9fU/XvpeYuyi8cI/AAAAAAAAAS8/76lSjVj-mFc1efn7phoeqMD2HeTlyLkQACK4BGAsYHg/image%2B4.png" alt="Node" />
              <p className={styles.technologyDetails}>
                Node
              </p>
            </div>
            <div className={styles.technology}>
              <img src="https://1.bp.blogspot.com/-xQJ-OH7zlF0/XvpeXiMziBI/AAAAAAAAASw/1O6iNMLWyqQ2nBL1rwo2bJaBampllVQUwCK4BGAsYHg/image%2B%25283%2529.png" alt="Gatsby" />
              <p className={styles.technologyDetails}>
                Gatsby
              </p>
            </div>
            <div className={styles.technology}>
              <img src="https://1.bp.blogspot.com/-dNQymx1lRXs/XvpeYFSjXqI/AAAAAAAAAS0/IxtjY_RxukUd5fNPPoweZC7YILX-GYIkQCK4BGAsYHg/image%2B%25284%2529.png" alt="Figma" />
              <p className={styles.technologyDetails}>
                Figma
              </p>
            </div>
          </div>
        </div>
        <div className={styles.profilePic}>
          <img src="https://1.bp.blogspot.com/-gAM7BDPI1vE/XvpeZl2Lp-I/AAAAAAAAATM/MJ6AaTZy-3Y1tS4UPYny5UTCJH0kMN-wQCK4BGAsYHg/s320/myphoto.png" alt="Tarun Chine" />
        </div>
      </div>
    </Section>
    <Section title="Awards">
      <div className={styles.awardSectionContent}>
        <div className={styles.award}>
          <img src="https://1.bp.blogspot.com/-3Wbxb-8uu88/XzgFKHbPo0I/AAAAAAAAAlI/qfkM6RUB73wMxH0I2qhU_ZQEIVZ9qoMAACLcBGAsYHQ/s640/certificate%2B1_4.jpg" alt="certificate" />
        </div>
        <div className={styles.award}>
          <img src="https://1.bp.blogspot.com/-XEgTGpNGnzs/XzgFJO1AsHI/AAAAAAAAAlE/eUVSSMkul7cVNwWNzgGbHAg3Hmyv_gFIwCLcBGAsYHQ/s640/certificate%2B1_3.jpg" alt="certificate" />
        </div>
        <div className={styles.award}>
          <img src="https://1.bp.blogspot.com/-1yiKS35NPRM/XzgFJEQgf8I/AAAAAAAAAk8/IezoSQ4BU-8JPSSpj186mu5Xv6TET0wcQCLcBGAsYHQ/s640/certificate%2B1_2.jpg" alt="certificate" />
        </div>
        <div className={styles.award}>
          <img src="https://1.bp.blogspot.com/-QpeNBaxa888/XzgFJKiAPDI/AAAAAAAAAlA/jjDKyO85iPo4En-A_GBEtoPWVjqb7IOiACLcBGAsYHQ/s640/certificate%2B1_1.jpg" alt="certificate" />
        </div>
      </div>
    </Section>
  </div>
}

export default AboutSection