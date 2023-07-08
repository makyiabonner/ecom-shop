import NewNav from "../newNav/newNav";
import styles from '@/components/viewItem/viewItem.module.scss';
import { useState, useEffect } from 'react';
import itemStyles from '@/components/shoppingItems/shoppingItems.module.scss';
import { useRouter } from "next/router";


export default function ViewItem() {
  const [items, setItems] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
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
      const selectedItemId = Number(router.pathname.match(/\d+/g).join(''));
      const selectedItem = items.find((item) => item.id === selectedItemId);

      if (selectedItem) {
        const similarItems = items.filter((item) => item.category === selectedItem.category);
        const recommendedItems = similarItems.slice(0, 4);
        setRecommended(recommendedItems);
      }
    }
  }, [items, router.pathname]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.item.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + selectedQuantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { item, quantity: selectedQuantity }]);
    }
  };
  console.log(cart)
  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value));
  };

  const selectedItemId = Number(router.pathname.match(/\d+/g).join(''));
  const selectedItem = items.find((item) => item.id === selectedItemId);

  return (
    <>
      <NewNav cart = {cart} />
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
                    <button className={styles.button} onClick={() => addToCart(selectedItem)}>ADD CART</button>
                    <select className={styles.qtyButton} onChange={handleQuantityChange}>
                      <option value="1">QTY: 1</option>
                      <option value="2">QTY: 2</option>
                      <option value="3">QTY: 3</option>
                      <option value="4">QTY: 4</option>
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
            {recommended.map((recommendedItem) => (
              <a href={`/products/${recommendedItem.id}`} key={recommendedItem.id} className={styles.a}>
                <div className={itemStyles.container}>
                  <img
                    src={recommendedItem.image}
                    alt={recommendedItem.description}
                    className={itemStyles.img}
                  />
                  <p className={itemStyles.prices}>{`$${recommendedItem.price}`}</p>
                  <span className={itemStyles.desc}>{recommendedItem.title}</span>
                </div>
              </a>
            ))}
          </section>
        </container>
      </main>
    </>
  );
}

