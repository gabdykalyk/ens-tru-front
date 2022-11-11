import { Link } from "react-router-dom";
import styles from "./FooterLicense.module.scss"

const FooterLicense = () => {
    return (
        <div className={styles.license}>
            <div className={styles.title}>
                2013-2021 © ТОО "Самрук-Казына Контракт". Все права защищены
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                    <Link to='/' >Лицензии</Link>
                </div>
                <div>
                    <Link to='/' >Права</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterLicense;