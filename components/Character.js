import Link from 'next/link'
import styles from '@/styles/Char.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const Character = (props) => {
    const Favorite = dynamic(() => import('@/components/Favorite'))
    return (
        <div className={styles.charlist}>
            <div className={styles.avatarimage}>
                <Image
                    src={props.photoUrl}
                    alt={props.name} title=""
                    width={350}
                    height={200}
                    className={styles.avatarimage}
                />
            </div>
            <div className={styles.avatarcontent}>
                <Link href={`/character/${encodeURIComponent(props.id)}`}>
                    <h1>{props.name}</h1>
                </Link>
                <Favorite id={props.id} className={styles.favoritebox} />
            </div>
        </div>
    )
}

export default Character