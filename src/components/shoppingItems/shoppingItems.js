import styles from '../shoppingItems/shoppingItems.module.scss';
import { useState, useEffect } from 'react';

export function ItemsByCategory(props) {
  const [items, setItems] = useState([]);

  const category = props.category;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [category]);

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
  );
}

export default function Items() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          setItems(json);
        });
    }, []);
  
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
    );
  }