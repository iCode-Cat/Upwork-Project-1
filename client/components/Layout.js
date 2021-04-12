import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from './Layout.module.scss'
import SideMenu from "./Side-menu/SideMenu";
const Layout = ({children}) => {
    return <div className={styles.container}>
        <Header/>
        <SideMenu/>
        {children}
        <Footer/>
    </div>    
}
 
export default Layout;