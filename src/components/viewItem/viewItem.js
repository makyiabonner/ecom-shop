import NewNav from "../newNav/newNav";
import styles from '@/components/viewItem/viewItem.module.scss';
import { useState, useEffect } from 'react';
import itemStyles from '@/components/shoppingItems/shoppingItems.module.scss';
import { useRouter } from "next/router";

export default function ViewItem() {
  const [items, setItems] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const recommendedItems = items.slice(0, 4);
      setRecommended(recommendedItems);
    }
  }, [items]);

  const selectedItemId = router.pathname.slice(-1);
  const selectedItem = items.find((item) => item.id === Number(selectedItemId));

  return (
    <>
      <NewNav />
      <main className={styles.topDiv}>
        <container className={styles.container}>
          {selectedItem && (
            <>
              <h1 className={styles.h1}>{selectedItem.title}</h1>
              <section className={styles.shopMenu}>
                <div className={styles.leftSideMenu}>
                  <img src={selectedItem.image} className={styles.img} />
                </div>
                <div className={styles.rightSideMenu}>
                  <div>
                    <h1 className={styles.prices}>{`$${selectedItem.price}`}</h1>
                    <div>
                      <h3 className={styles.h3}>Description</h3>
                      <p className={styles.description}>
                        {selectedItem.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className={styles.button}>ADD CART</button>
                    <select className={styles.qtyButton}>
                      <option>QTY</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </section>
            </>
          )}
        </container>
        <container className={styles.container2}>
          <h1 className={styles.h1}>Recommended Items</h1>
          <section className={styles.gridSection}>
            {recommended.map((obj) => (
                <a href={`/products/${obj.id}`}>
                    <div key={obj.id} className={itemStyles.container}>
                        <img
                        className={itemStyles.img}
                        src={obj.image}
                        alt={obj.description}
                        />
                        <p className={itemStyles.prices}>{`$${obj.price}`}</p>
                        <span className={itemStyles.desc}>{obj.title}</span>
                    </div>
                </a>
            ))}
          </section>
        </container>
      </main>
    </>
  );
}
