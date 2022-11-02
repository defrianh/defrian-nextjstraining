import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import stylesAvatar from '@/styles/Avatar.module.css'

const AvatarDetail = (props) => {
    const { dataPosts } = props
    return (
        <main className={styles.main}>
            <div className={stylesAvatar.characterdetail}>
                <h1 className={styles.title}>
                    {dataPosts[0].name}
                </h1>
                <Image
                    src={dataPosts[0].photoUrl}
                    alt="" title=""
                    width={500}
                    height={300}
                />
                <table className={stylesAvatar.table}>
                    <tbody>
                        <tr>
                            <th>Affiliation</th>
                            <td>{dataPosts[0].affiliation}</td>
                        </tr>
                        <tr>
                            <th>Enemies</th>
                            <td>{
                                dataPosts[0].enemies && dataPosts[0].enemies.map((enemy, idx) => {
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

export async function getServerSideProps(context) {
    const name = context.params.name
    const fecthPosts = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?name=' + name)
    const dataPosts = await fecthPosts.json()
    return {
        props: { dataPosts },
    }
}

export default AvatarDetail