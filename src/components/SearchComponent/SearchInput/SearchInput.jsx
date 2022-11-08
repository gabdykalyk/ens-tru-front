import DarkButton from "../../Buttons/DarkButton/DarkButton";
import CheckboxComponent from "../Checkbox/CheckboxComponent";
import styles from './SearchInput.module.scss'
import { ReactComponent as SeparatorSm } from '../../../images/separator-sm.svg';
import { ReactComponent as ArrowDown } from '../../../images/arrowblack.svg';

const SearchInput = () => {
    return (
        <form>
            <div className={styles.wrapper}>
                <input placeholder="Текст для поиска..." />
                <DarkButton />
            </div>
            <div className={styles.checkbox_wrapper}>
                <CheckboxComponent label="Искать только в наименованиях" />
                <div className={styles.separator}>
                    <SeparatorSm />
                </div>
                <CheckboxComponent label="Искать КПВЭД" />
                <div className={styles.separator}>
                    <SeparatorSm />
                </div>
                <div className={styles.tru_type}>
                    Вид ТРУ
                    <div className={styles.ml_12}>
                        <ArrowDown />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchInput;