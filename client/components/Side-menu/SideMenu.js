import style from './SideMenu.module.scss';
import Link from 'next/link'
const SideMenu = ({setToggle, toggle}) => {
    return (
        <div className={`${style.container} ${toggle ? 'side-anim':'side-anim-out'}`}>
            <img onClick={()=>{setToggle(false)}} src="assets/home-page/cross.svg" alt="amer-al-akkad-menu-close"/>
            <div className={style.items}>
            <Link href='/'><h1>HOME</h1></Link>
            <Link href='/about'><h1>ABOUT Web</h1></Link>
            <Link href='/contact'><h1>Contact</h1></Link>
            <Link href='/ux-ui' ><h2>UX/UI</h2></Link>
            <Link href='/infographic' ><h2>Infographic</h2></Link>
            <Link href='/branding' ><h2>Branding</h2></Link>
            <Link href='/video' ><h2>Video</h2></Link>
            <Link href='/printing' ><h2>Printing</h2></Link>
            <Link href='/advertising' ><h2>Advertising</h2></Link>
            <Link href='/automation' ><h2>Automation</h2></Link>
            </div>
        </div>
    )
}
 
export default SideMenu;