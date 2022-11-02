import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <>
        <Head>
            <title>Pengendali Udara</title>
        </Head>
        <Navbar />
        <div className={styles.container}>
                {props.children}
            <Footer />
        </div>
        </>
    )
}
export default Layout