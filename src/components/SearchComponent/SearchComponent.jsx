import styles from './SearchComponent.module.scss'
import SearchInput from './SearchInput/SearchInput';

const SearchComponent = () => {
    return (
        <div className={styles.search}>
            <div className={styles.title}>
                Единый номенклатурный справочник товаров, работ и услуг
            </div>
            <div>
                <SearchInput />
            </div>
        </div>
    )
}

export default SearchComponent;