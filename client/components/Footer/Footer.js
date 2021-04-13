import styles from './Footer.module.scss'
const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
            <div className={styles.logo}>
                <img width='auto' height='auto' src="/assets/home-page/Adobe-Logo.svg" alt="amer-al-akkad-adobe-certified-expert"/>
            </div>
            <div className={styles.icons}>
                <p className={styles.text}>Contact</p>
                <img width='auto' height='auto' src="/assets/home-page/message-circle.svg" alt="amer-al-akkad-whatsapp"/>
                <img width='auto' height='auto' src="/assets/home-page/mail.svg" alt="amer-al-akkad-mail"/>
            </div>
            </div>
            <div className={styles.footer_bottom}>
            <p>© 2021 Amer Al Akkad - IMAGENMORE</p>
            </div>
        </footer>
     );
}
 
export default Footer;