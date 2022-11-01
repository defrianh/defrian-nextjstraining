import Head from 'next/head'
import Image from 'next/image'
import Char from '../../components/Char'
import styles from '../../styles/Home.module.css'

export default function Character(props) {
  const { dataPosts } = props
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Avatar Characters by Local API
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
  const fecthPosts = await fetch('http://localhost:3000/api/avatar')
  const dataPosts = await fecthPosts.json()
  return {
    props: { dataPosts },
  }
}
