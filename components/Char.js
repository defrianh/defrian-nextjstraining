import Link from 'next/link'
import styles from '../styles/Char.module.css'
const Char = (props) => {
    return (
        <div className={styles.charlist}>
            <Link href={`/avatar/${encodeURIComponent(props.name)}`}>
                <h1>{props.name}</h1>
            </Link>
        </div>
    )
}
export default Char