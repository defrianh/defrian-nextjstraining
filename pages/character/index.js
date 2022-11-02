import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

export default function Character(props) {
  const { data } = props
  const Character = dynamic( () => import('@/components/Character'))
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Avatar Characters by Local API
        </h1>
        <h4>Using getStaticProps</h4>
        {
          data && (
            data.map((post) => 
              <Character 
                name={post.name} 
                id={post._id} 
                key={post._id} 
                photoUrl={post.photoUrl}
                profession={post.profession}
              />
            )
          )
        }
      </main>
    </>
  )
}

export async function getStaticProps() {
  const fecthData = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar')
  const data = await fecthData.json()
  return {
    props: { data },
  }
}
