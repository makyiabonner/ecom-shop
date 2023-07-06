import styles from '../shoppingItems/shoppingItems.module.scss';
import { useState, useEffect } from 'react';

export function ItemsByCategory(props) {
  const [items, setItems] = useState([]);
  const [option, setOption] = useState('');


  const category = props.category;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        let sortedJson = json
        if(option === 'Low to High'){
          sortedJson = json.sort((a,b) => a.price - b.price)
        } else if(option === 'High to Low'){
          sortedJson = json.sort((a,b) => b.price - a.price)
        }
        setItems(sortedJson)
      });
  }, [category, option]);
  
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

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