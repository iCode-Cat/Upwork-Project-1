import global from './pages.module.scss'
import style from '../styles/contact.module.scss'
const Contact = () => {
  
    return ( 
        <div className={global.container}>
            <main className={style.main}>
            <form>
               <div>
               <label htmlFor="yourname">Your Name <span>*</span></label>
                <input type="text"/>
               </div>
               <div>
               <label htmlFor="yourname">Email Address <span>*</span></label>
                <input type="text"/>
               </div>
                <div className={style.subject}>
                <label htmlFor="yourname">Subject <span>*</span></label>
                <input type="text"/>
                </div>
                <div className={style.text}>
                <label htmlFor="yourname" >Message <span>*</span></label>
                <textarea name="message" id="" cols="30" rows="5"></textarea>
                </div>
                <button>Submit</button>
                <div className={style.info}>
                <p>Phone:  +971 55 315 2439</p>
                <p>Email:  info@amerakkad.com</p>
                <p>Abu Dhabi, U.A.E</p>
            </div>
            </form>
        
            </main>
        </div>
     );
}
 
export default Contact;