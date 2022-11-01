import styles from '../../styles/Home.module.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Navbar />
                {props.children}
            <Footer />
        </div>
    )
}
export default Layout