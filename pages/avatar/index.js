import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from "react";

export default function Avatar() {
    const [show, setShow] = useState(false);
    const Box = dynamic(() => import('@/components/Box'), {loading: () => <b>Loading..</b> })
    
    return (
        <main className={styles.main}>
            <h1>Avatar Page</h1>
            <h2>This page without layout</h2>
            <Link href='/'>Back to Home</Link>
            <br/>
            <button onClick={() => setShow((pV) => !pV)}>Toggle Component</button>
            {show ? <Box /> : null}
        </main>
    )
}
