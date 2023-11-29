import Link from "next/link";
import styles from "./Logo.module.css"
import { Montserrat, Lalezar } from 'next/font/google'
const logoFont = Montserrat({ subsets: ['latin'], weight:['400']})

export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>AL-Khalel</Link>
    
  )
}
