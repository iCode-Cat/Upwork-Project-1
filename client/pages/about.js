import global from './pages.module.scss'
import styles from '../styles/about.module.scss'
const About = () => {
  
    return ( 
        <div className={global.container}>
            <main className={styles.main}>
                <section className={styles.box}>
                    <img width='auto' height='auto' className={styles.photo} src="/assets/about/amer-al-akkad.svg" alt="amer-al-akkad-freelancer"/>
                </section>
                <section className={styles.box}>
                <h1>
                AMER ALAKKAD
                </h1>
                <img width='auto' height='auto' src="/assets/home-page/Adobe-Logo.svg" alt="amer-al-akkad-adobe-certified-expert"/>
                <ul>
                    <li>• Adobe Photoshop</li>
                    <li>• Adobe InDesign</li>
                    <li>• Adobe Illustrator</li>
                    <li>• Adobe Flash</li>
                    <li>• Adobe After Effects</li>
                    <li>• Microsoft Office</li>
                    <li>• Adobe XD</li>
                    <li>• Sketch draw</li>
                    <li>• Principle</li>
                    <li>• Final cut</li>
                    <li>• Arduino</li>
                    <li>• Unity</li>
                </ul>
                </section>
             
                <section className={styles.box}><p>
                The shape and form of our endeavors is pretty much influenced by how others perceive them, hence the importance of conveying clear and simple messages is key to creating positive appeal amongst the masses.
<br></br>
<br></br>
Consequently, my passion is to help businesses and corporations develop an arsenal of communication tools that are tailor made to process and deliver complex messages in a visually contemplated storyboard to convey the essence of each message without the unnecessary additions that usually confuse the audience rather than clearly reach out to them.
                </p></section>
            </main>
        </div>
     );
}
 
export default About;