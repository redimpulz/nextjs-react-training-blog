import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { getSortedPostsData } from '@/lib/posts';

import Layout, { siteTitle } from '@/components/Layout';
import utilStyles from '@/styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>We are REDIMPULZ!!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}

          {/* {allPostsData.map((x) => (
            <li className={utilStyles.listItem} key={x}>
              <img src={x} style={{ width: 200, height: 200 }} />
            </li>
          ))} */}
        </ul>
      </section>
    </Layout>
  );
}
