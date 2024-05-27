import styles from './SearchBar.module.css';
export const SearchBar = () => (
    <>
        <form className={styles.search__bar}>
            <input className={styles.search__field} type="text" placeholder="Search..." />
        </form>
    </>
);
