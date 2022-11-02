import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

export default function Home(props) {
  const { data } = props
  const Char = dynamic(() => import('@/components/Char'), { ssr: true, loading: () => <b>Loading..</b> })

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Avatar Characters
        </h1>
        {
          data && (data.map((avatar) => {
              return (<Char name={avatar.name} id={avatar.id} key={avatar._id} />)
            })
          )
        }
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const fecthData = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar')
  const data = await fecthData.json()
  return {
    props: { data },
  }
}
