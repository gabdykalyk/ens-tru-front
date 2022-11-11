import { ReactComponent as TimeLogo } from '../../../../images/time.svg';
import styles from "./WorkTime.module.scss"

const WorkTime = () => {
    return (
        <div>
            <div className={styles.title}>
                <div className={styles.logo}>
                    <TimeLogo />
                </div>
                <div>
                    Время работы
                </div>
            </div>
            <div className={styles.time}>
                Будние дни: с 9:00 до 18:00.
                Выходные: с 9:00 до 18:00.
            </div>
        </div>
    );
}

export default WorkTime;