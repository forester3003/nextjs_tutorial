import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import utileStyle from "../styles/utiles.module.css";
import Link from "next/link";

import { getPostsData } from "../lib/posts";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  //console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utileStyle.headingMd}>
        <p>
          NextJS Udemy学習
        </p>
      </section>

      <section className={`${utileStyle.headingMd} ${utileStyle.padding1px}`}>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`}
                  className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utileStyle.boldText}>
                  {title}
                </a>
              </Link>
              <br />
              <small className={utileStyle.lightText}>
                {date}
              </small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
