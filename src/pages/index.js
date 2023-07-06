import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import NewNav from '@/components/newNav/newNav'
import Slideshow from '@/components/slideshow/slideshow'
import Items from '@/components/shoppingItems/shoppingItems'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NewNav/>
      <Slideshow/>
      <main className={styles.main}>
        <div className={styles.containerMain}>
          <h1 className={styles.h1}>RoSCos Collection</h1>
          <div className={styles.div}>
            <Items/>
          </div>
        </div>
      </main>
    </>
  )
}
