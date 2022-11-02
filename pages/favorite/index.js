import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";

export default function FavoritePage(props) {
    const { data } = props
    const Character = dynamic(() => import('@/components/Character'))
    const [favorites, setFavorite] = useState();

    useEffect(() => {
        let favorite = JSON.parse(localStorage.getItem('favorites')) || []
        let newData = data.filter((el) => favorite.includes(el._id));
        setFavorite(newData)
    }, [])
    
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    My Favorite Avatar
                </h1>

                {

                    favorites?.length > 0 ? (
                        favorites.map((post) =>
                            <Character name={post.name} id={post._id} key={post._id} photoUrl={post.photoUrl} />
                        )
                    ) : (
                        <h1>No data</h1>
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
