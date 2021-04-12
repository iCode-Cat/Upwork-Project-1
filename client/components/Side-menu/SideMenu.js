import style from './SideMenu.module.scss';
const SideMenu = () => {
    return (
        <div className={style.container}>
            <img src="assets/home-page/cross.svg" alt="amer-al-akkad-menu-close"/>
            <div className={style.items}>
            <h1>HOME</h1>
            <h1>ABOUT Web</h1>
            <h1>Contact</h1>
            <h2>UX/UI</h2>
            <h2>Infographic</h2>
            <h2>Branding</h2>
            <h2>Video</h2>
            <h2>Printing</h2>
            <h2>Advertising</h2>
            <h2>Automation</h2>
            </div>
        </div>
    )
}
 
export default SideMenu;