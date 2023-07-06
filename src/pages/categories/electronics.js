import styles from '@/styles/Home.module.scss'
import { ItemsByCategory } from '@/components/shoppingItems/shoppingItems';
import NewNav from '@/components/newNav/newNav';
import SortedData from '@/components/sortData/sortData';



export default function Category(){

    return (
          <SortedData category = 'electronics'/>
      )
}
