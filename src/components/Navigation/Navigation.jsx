import { Link } from "react-router-dom";
import { ReactComponent as ArrowDown } from '../../images/arrowdown.svg';
import styles from "./Navigation.module.scss"

const Navigation = () => {
    return (
        <ul className={styles.nav}>
            <li>
                <Link to="/">Поиск</Link>
            </li>
            <li>
                <Link to="/">Поставщикам</Link>
            </li>
            <li className={styles.drop_down}>
                <Link to="/">Инструменты</Link>
                <div className={styles.arrow}>
                    <ArrowDown />
                </div>
            </li>
            <li>
                <Link to="/contacts">Контакты</Link>
            </li>
        </ul>
    )
}

export default Navigation;