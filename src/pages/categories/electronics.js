import styles from '@/styles/Home.module.scss'
import { ItemsByCategory } from '@/components/shoppingItems/shoppingItems';
import NewNav from '@/components/newNav/newNav';
import SortedData from '@/components/sortData/sortData';



export default function Category(){

    return (
        <>
          <NewNav/>
          <SortedData/>
          <main className={styles.main}>
            <div className={styles.containerMain}>
              <h1 className={styles.h1}>Jewelery Collection</h1>
              <div className={styles.div}>
                <ItemsByCategory category='jewelery'/>
              </div>
            </div>
          </main>
        </>
      )
}
