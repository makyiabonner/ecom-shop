import styles from '@/components/sortData/sortData.module.scss';
import itemStyles from '../shoppingItems/shoppingItems.module.scss';

import NewNav from '../newNav/newNav';
import { useState, useEffect } from 'react';

export default function SortedData(props) {
    const [items, setItems] = useState([]);
    const [option, setOption] = useState('');
  
    const category = props.category;
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => {
          let sortedJson = json;
          if (option === 'Low to High') {
            sortedJson = json.sort((a, b) => a.price - b.price);
          } else if (option === 'High to Low') {
            sortedJson = json.sort((a, b) => b.price - a.price);
          }
          setItems(sortedJson);
        });
    }, [category, option]);
  
    const handleSortChange = (event) => {
      setOption(event.target.value);
    };
  
    return (
      <>
        <NewNav />
        <div className={styles.sortNav}>
          <div className={styles.section}>
            <p className={styles.p}>Sort By</p>
            <select
              value={option}
              onChange={handleSortChange}
              className={styles.dropdown}
            >
              <option value={''}>--- ---</option>
              <option value={'Low to High'}>Prices: Low to High</option>
              <option value={'High to Low'}>Prices: High to Low</option>
            </select>
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.containerMain}>
            <h1 className={styles.h1}>{`${category} Collection`}</h1>
            <div className={styles.div}>
                {items.map((obj) => (
                  <a  className={styles.a} href={`/products/${obj.id}`}>
                    <div key={obj.id} className={itemStyles.container}>
                    <img
                      className={itemStyles.img}
                      loading="eager"
                      src={obj.image}
                      alt={obj.description}
                    />
                    <p className={itemStyles.prices}>{`$${obj.price}`}</p>
                    <span className={itemStyles.desc}>{obj.title}</span>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </main>
      </>
    );
  }
  