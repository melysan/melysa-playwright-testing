import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <>About Page

            <div className={styles.grid}>
                <Link href="/" className={styles.card}>Go Back</Link>
            </div>
        </>
    )
}