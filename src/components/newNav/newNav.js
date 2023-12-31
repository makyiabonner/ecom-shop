import styles from '../newNav/newNav.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

const categories = [
  {id:"0", linkName:"ELECTRONICS", link:"/categories/electronics"},
  {id:"1", linkName:"JEWELERY", link:"/categories/jewelery"},
  {id:"2", linkName:"MEN", link:"/categories/mens-collection"},
  {id:"3", linkName:"WOMEN", link:"/categories/womens-collection"}
]
export default function NewNav(){
  const router = useRouter();

  return (
  <>
    <nav className={styles.firstNav}>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      </svg>
      <div>
        <a className={styles.logo} href="/">roSCos</a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
    </nav>
    <nav className={styles.secondNav}>
        <ul className={styles.ul}>
          {categories.map((obj) => {
            return (
              <>
                <li key={obj.id} 
                    className={router.pathname === obj.link? styles.activeLi : styles.li}>
                    <a href={obj.link} className={styles.a}>
                      <p className={styles.p}>
                      {obj.linkName}
                      </p>
                    </a>
                </li>
              </>
            )
          })}       
        </ul>
        <div class="col-auto">
          <input type="text" class="form-control" id="inputPassword2" placeholder="Search Product"/>
        </div>
    </nav>
  </>
  )
}
