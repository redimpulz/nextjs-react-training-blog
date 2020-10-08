import React from 'react';
import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { getAllPostIds, getPostData } from '@/lib/posts';

import Layout from '@/components/Layout';
import Date from '@/components/Date';

import utilStyles from '@/styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const id = typeof params?.id === 'string' ? params.id : '';
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({
  postData,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
