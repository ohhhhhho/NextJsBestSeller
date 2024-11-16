import Link from "next/link";
import styles from '@/app/styles/navigation.module.css'

export default function Navigation(){
    return(
        <>
            <ul className={styles.wrap}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    )
}