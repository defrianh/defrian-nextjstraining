import style from '@/styles/Error.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <main>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className={style.container}>
                <div className={style.errordetail}>
                    <div className={style.errorimage}>
                        <Image src="/error.jpg" alt="" width={300} height={300} />
                    </div>
                    <div className={style.errormessage}>
                        <h1>404</h1>
                        <h3>Oooops Not Found</h3>
                        <h4><Link href='/'>Back to Home</Link></h4>
                    </div>
                </div>
            </div>
        </main>
        
    )
}
export default NotFoundPage