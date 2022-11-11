import { ReactComponent as InstagramLogo } from '../../../../images/inst.svg';
import { ReactComponent as FacebookLogo } from '../../../../images/fb.svg';
import { ReactComponent as GoogleLogo } from '../../../../images/google.svg';
import styles from "./Social.module.scss"

const Social = () => {
    return (
        <div>
            <div className={styles.logo}>
                <img src={require('../../../../images/logo.png')} />
            </div>
            <div className={styles.title}>
                Единый номенклатурный справочник товаров, работ и услуг
            </div>
            <div className={styles.social}>
                <div className={styles.item}>
                    <InstagramLogo />
                </div>
                <div className={styles.item}>
                    <FacebookLogo />
                </div>
                <div className={styles.item}>
                    <GoogleLogo />
                </div>
            </div>
        </div>
    );
}

export default Social;