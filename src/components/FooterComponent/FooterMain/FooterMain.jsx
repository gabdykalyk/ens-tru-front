import Contacts from "./Contacts/Contacts";
import Social from "./Social/Social";
import WorkTime from "./WorkTime/WorkTime";
import styles from './FooterMain.module.scss'

const FooterMain = () =>{
    return(
        <div className={styles.main}>
            <Social />
            <WorkTime />
            <Contacts />
        </div>
    )
}

export default FooterMain;