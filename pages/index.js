import Char from '../components/Char'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const { dataPosts } = props
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Avatar Characters
        </h1>
        {
          dataPosts.map((post) => {
            return (<Char name={post.name} id={post.id} key={post._id} />)
          })
        }
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const fecthPosts = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar')
  const dataPosts = await fecthPosts.json()
  return {
    props: { dataPosts },
  }
}
