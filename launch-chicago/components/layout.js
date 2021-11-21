import styles from './layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/Link'

const name = "Launch"
export const siteTitle = "Launch Chicago"

export default function Layout({ children, home }) {
  return(
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Launch the next generation of mobile developers"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>  
      <header className={styles.header}>
        {
          home ? (
            <>
              <Image
                priority
                src="/images/logo.png"
                height={144}
                width={200}
                alt={name}
              />
              <h1 className={utilStyles.heading2XL}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/logo.png"
                    height={200}
                    width={400}
                    alt={name}
                  />
                </a>
              </Link>
              {/* <h2 classNAme={utilStyles.headingLg}>
                <Link href="/"> 
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2> */}
            </>
          )
        }  
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}