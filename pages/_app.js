import '../styles/globals.css'
import Head from "next/head"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  function pageName(pathname){
    if (pathname === '/'){
      return 'Home'
    }
    else if (pathname === '/aboutme'){
      return 'About'
    }
    else if (pathname === '/certifications'){
      return 'Certifications'
    }
    else if (pathname === '/projects'){
      return 'Projects'
    }
    else if (pathname === '/resume'){
      return 'Resume'
    }
    else{
      return ''
    }

  }

  return (
    <div>
      <Head>
        <title>{pageName(router.pathname)} | Lauren Melendez Profile</title>
        <link rel="icon" href="/Images/favicon.png" />
        <meta property="og:image" content="/Images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
    
  )
  
}

export default MyApp
