import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import stylesAvatar from '@/styles/Avatar.module.css'

const CharacterDetail = (props) => {
    const { data } = props
    return (
        <main className={styles.main}>
            <div className={stylesAvatar.characterdetail}>
                <h1 className={styles.title}>
                    {data.name}
                </h1>
                <Image
                    src={data.photoUrl}
                    alt="" title=""
                    width={500}
                    height={300}
                />
                <table className={stylesAvatar.table}>
                    <tbody>
                        <tr>
                            <th>Affiliation</th>
                            <td>{data.affiliation}</td>
                        </tr>
                        <tr>
                            <th>Enemies</th>
                            <td>{
                                data.enemies && data.enemies.map((enemy, idx) => {
                                    return (<p key={idx}>{enemy}</p>)
                                })
                            }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export async function getStaticPaths() {
    const fecthData = await fetch(`http://localhost:3000/api/avatar`)
    const datas = await fecthData.json()

    const paths = datas.map((data) => ({
        params: { id: data._id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const fecthData = await fetch(`http://localhost:3000/api/avatar/${params.id}`)
    const data = await fecthData.json()
    return {
        props: { data },
    }
}

export default CharacterDetail