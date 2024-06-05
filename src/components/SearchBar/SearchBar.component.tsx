import Arrow from '@/assets/icons/arrow.svg?react';
import { Button } from '@/components/button/Button.tsx';

import styles from './SearchBar.module.css';
export const SearchBar = () => (
    <>
        <form className={styles.search__bar}>
            <label className={styles.input__box}>
                <input className={styles.search__field} id={styles.search__field} type="text" placeholder="Search..." />
            </label>
            <div className={styles.type__goods}>
                <Button className={styles.search__button}>
                    <div className={styles.btn__bd}></div>
                    Electronics
                </Button>
                <Button className={styles.search__button}>
                    <div className={styles.btn__bd}></div>
                    Shoes
                </Button>
                <Button className={styles.search__button}>
                    <div className={styles.btn__bd}></div>
                    Clothes
                </Button>
            </div>
            <div className={styles.sort__filter}>
                <span className={styles.sort__title}>Sort by:</span>
                <div>
                    <ul className={styles.sort__list}>
                        <li className={styles.list__item}>
                            <span className={styles.item__block}>
                                Price (High - Low)
                                <Arrow className={styles.arrow} />
                            </span>
                        </li>
                        <li className={styles.list__item}>
                            <span className={styles.item__block}>Price (Low - High)</span>
                        </li>
                        <li className={styles.list__item}>
                            <span className={styles.item__block}>Newest</span>
                        </li>
                        <li className={styles.list__item}>
                            <span className={styles.item__block}>Oldest</span>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    </>
);
