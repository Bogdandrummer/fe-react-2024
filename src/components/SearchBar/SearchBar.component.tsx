import Search from '@/assets/icons/search.svg?react';
import { Button } from '@/components/button/Button.tsx';

import styles from './SearchBar.module.css';
export const SearchBar = () => (
    <>
        <form className={styles.search__bar}>
            <label className={styles.input__box}>
                <input className={styles.search__field} id={styles.search__field} type="text" placeholder="Search..." />
                <Search className={styles.search__icon} />
            </label>
            <div className={styles.type__goods}>
                <Button className={styles.search__button}>Electronics</Button>
                <Button className={styles.search__button}>Shoes</Button>
                <Button className={styles.search__button}>Clothes</Button>
            </div>
            <div className={styles.sort__filter}>
                <span className={styles.sort__title}>Sort by:</span>
                <div>
                    <ul className={styles.sort__list}>
                        <li className={styles.list__item}>Price (High - Low)</li>
                        <li className={styles.list__item}>Price (Low - High)</li>
                        <li className={styles.list__item}>Newest</li>
                        <li className={styles.list__item}>Oldest</li>
                    </ul>
                </div>
            </div>
        </form>
    </>
);
