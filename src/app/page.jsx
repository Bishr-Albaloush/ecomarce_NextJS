import Image from 'next/image'
import styles from './page.module.css'
import Hero from "/public/images/hero.svg"

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.col}>
      <h1 className={styles.title}>
        Your one-step e-commerce destination!
      </h1>
      <p className={styles.description}>
        Discover a world of endless shopping possiblities at our online store, Browse, choose, and order your favorite products from the comfort of yuor home
      </p>
      <button className={styles.button}>Shop Now</button>
    </div>
    <div className={styles.col}>
      <Image className={styles.img} src={Hero} alt='Al-Khalel'/>
    </div>
   </div>
  )
}
