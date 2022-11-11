import { ReactComponent as PhoneImage } from '../../../../images/phone.svg';
import { ReactComponent as GeoImage } from '../../../../images/geo.svg';
import styles from "./Contacts.module.scss"

const Contacts = () => {
    return (
        <div>
            <div className={styles.item}>
                <div className={styles.img}>
                    <PhoneImage />
                </div>
                <div>
                    +7 (777) 727 2262
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.img}>
                    <GeoImage />
                </div>
                <div>
                    г. Астана, ул Курмангазы 777
                </div>
            </div>
        </div>
    );
}

export default Contacts;