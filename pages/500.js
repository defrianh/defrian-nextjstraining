import style from '@/styles/Error.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
const InternalErrorPage = () => {
    return (
        <main>
            <Head>
                <title>Internal Server Error</title>
            </Head>
            <div className={style.container}>
                <div className={style.errordetail}>
                    <div className={style.errorimage}>
                        <Image src="/error.jpg" alt="" width={300} height={300} />
                    </div>
                    <div className={style.errormessage}>
                        <h1>500</h1>
                        <h3>Oooops Server Error</h3>
                        <h4><Link href='/'>Back to Home</Link></h4>
                    </div>
                </div>
            </div>
        </main>
        
    )
}
export default InternalErrorPage