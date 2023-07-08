import styles from '../shoppingItems/shoppingItems.module.scss';
import { useState, useEffect } from 'react';


export default function Items() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          setItems(json);
        });
    }, []);
    console.log(items.map(obj => obj.id))
    return (
      <>
        {items.map((obj) => (
          <a href={`/products/${obj.id}`}>
            <div key={obj.id} className={styles.container}>
                <img className={styles.img} src={obj.image} alt={obj.description} />
              <p className={styles.prices}>{`$${obj.price}`}</p>
              <span className={styles.desc}>{obj.title}</span>
            </div>
          </a>
        ))}
      </>
    );
  }
