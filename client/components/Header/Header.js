import styles from './Header.module.scss'
const Header = ({toggle, setToggle}) => {
    return ( 
        <header className={styles.header}>
        <div className={styles.logo}>
        <img width='auto' height='auto' className={styles.logo} src="assets/home-page/Full-Logo.svg" alt="amer-al-akkad-creative-director"/>
        </div>
        <div className={styles.menu_icons}>
         <img width='auto' height='auto' src="assets/home-page/Search-Btn.svg" alt="amer-al-akkad-search"/>
          <img width='auto' height='auto' onClick={()=>{setToggle(true)}} src="assets/home-page/menu-btn.svg" alt="amer-al-akkad-menu"/>
        </div>
        </header>
     );
}
 
export default Header;