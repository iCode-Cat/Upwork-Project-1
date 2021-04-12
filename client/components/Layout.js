import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from './Layout.module.scss'
import SideMenu from "./Side-menu/SideMenu";
import {useState} from 'react';
const Layout = ({children}) => {

    const [toggle, setToggle] = useState(false);

    return <div className={styles.container}>
        <Header toggle={toggle} setToggle={setToggle}/>
        <SideMenu toggle={toggle} setToggle={setToggle} />
        {children}
        <Footer/>
    </div>    
}
 
export default Layout;