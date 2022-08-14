import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.css";
import utileStyles from "../styles/utiles.module.css";

const name = "NextJS Tutorial";
export const siteTitle = "Next.js blog";

export default function Layout( {children, home} ) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/images/profile.png" className={`${utileStyles.borderCircle} ${styles.headerHomeImage}`} />
                        <h1 className={utileStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img src="/images/profile.png" className={utileStyles.borderCircle} />
                        <h1 className={utileStyles.heading2Xl}>{name}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <Link href="/">←ホームへ戻る</Link>
            )}
        </div>
    );
}