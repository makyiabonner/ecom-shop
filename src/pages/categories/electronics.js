import styles from '@/styles/Home.module.scss'
import { ItemsByCategory } from '@/components/shoppingItems/shoppingItems';
import NewNav from '@/components/newNav/newNav';


export function sortedData(){

    return (
        <>
        {items.map((obj) => (
            <div key={obj.id} className={styles.container}>
                <img className={styles.img} src={obj.image} alt={obj.description} />
            <p className={styles.prices}>{`$${obj.price}`}</p>
            <span className={styles.desc}>{obj.title}</span>
            </div>
        ))}
        </>
    )
}
export default function Category(){

    return (
        <>
          <NewNav/>
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
