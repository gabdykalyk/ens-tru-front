import DarkButton from "../../Buttons/DarkButton/DarkButton";
import styles from './SearchInput.module.scss'

const SearchInput = () => {
    return(
        <div className={styles.wrapper}>
                <input placeholder="Текст для поиска..."/>
                <DarkButton />
        </div>
    )
}

export default SearchInput;