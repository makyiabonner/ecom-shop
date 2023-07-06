import styles from '@/components/sortData/sortData.module.scss';

export default function SortedData(props){

    return(
        <div className={styles.sortNav}>
            <div className={styles.section}>
                <p className={styles.p}>Sort By</p>
                <select className={styles.dropdown}>
                    <option>--- ---</option>
                    <option>Prices: Low to High</option>
                    <option>Prices: High to Low</option>
                </select>
            </div>
        </div>
    )
}