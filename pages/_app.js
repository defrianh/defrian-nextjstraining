import '@/styles/globals.css'
import Layout from '@/components/Layout/Layout'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (['/avatar','/404','/500'].includes(router.pathname))
    return <Component {...pageProps} />;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
