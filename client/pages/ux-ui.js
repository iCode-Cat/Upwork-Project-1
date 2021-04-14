import style from '../styles/ui.module.scss';
import global from './pages.module.scss'
const Ui = () => {
  
    return ( 
        <div className={`${global.container} ${style.main}`}>
            <div className={style.wrapper}>
            <div className={style.showreel}>
            <img src="/assets/ui/image-copy.svg" alt="amer-al-akkad-ui/ux"/>
            </div>
            <div className={style.second}>
            <div className={style.first_column}>
            <div className={style.chance_holder}>
           <div className={style.change}></div>
            <div className={style.change}></div>
            <div className={style.change}></div>
            <div className={style.change}></div>
            <div className={style.change}></div>
           </div>
           <p className={style.description}>
Project Descriptions Project Descriptions Project Descriptions Project Descriptions Project Descriptions Project Descriptions Project Descriptions Project Descriptions 
           </p>

            </div>
            <div className={style.second_column}>
            <img src="/assets/ui/Video.svg" alt="amer-al-akkad-video"/>
            </div>
            </div>
            <div className={style.pagination}>
                <img src="/assets/ui/arrow1.svg" alt=""/>
                <div className={style.pages}>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                </div>
                <img src="/assets/ui/arrow2.svg" alt=""/>
            </div>
            </div>
        </div>
     );
}
 
export default Ui;