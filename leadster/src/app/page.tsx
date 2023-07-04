import Image from 'next/image'
import styles from './page.module.css'
import { Filter } from '@/components/filter'


export default function Home() {
  return (
    <main className={styles.main}>
      <Filter/>
    </main>
  )
}
