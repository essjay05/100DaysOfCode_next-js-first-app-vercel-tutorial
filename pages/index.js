import { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

// import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  // const allPostsData = await getSortedPostsData();
  // return {
  //   props: {
  //     allPostsData,
  //   },
  // };
  const allProjectsData = await fetch('https://find-your-joy-app.onrender.com/api/projects')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const apiProjectsData = data
      console.log('fetch apiProjectsData')
      console.log(apiProjectsData)
      return apiProjectsData.data
    })
    .catch(err => console.error(err))
  return {
    props: {
      allProjectsData,
    },
  };
}

export async function getApiStaticProps() {
  
}

export default function Home({ allProjectsData }) {
  
  // const [ projects, setProjects ] = useState(null)

  // console.log('projects')
  // console.log(projects)

  // useEffect(() => {
  //   const apiResults = getApiStaticProps()
  //   setProjects(apiResults)
  //   console.log('apiResults in useEffect')
  //   console.log(apiResults)
  // }, [])

  console.log('allProjectsData')
  console.log(allProjectsData)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Link href='/posts/first-post'>Go to First Post Page</Link>
      <section className={utilStyles.headingMd}>
        <p>I'm a Joy-of-All-Trades former theatre stage manager turned software engineer. You can find my contact info on my <a href='https://www.joyserquina.com' target='_blank'>portfolio</a>.</p>
        <br/>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      { allProjectsData.length > 0 ?
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Projects</h2>
          <ul className={utilStyles.list}>
            {allProjectsData.map((project) => {
              const { id, name, description } = project.attributes
              return (
                <li className={utilStyles.listItem} key={name}>
                  <h3 className={utilStyles.headingSm}>{name}</h3>
                  <p>{description}</p>
                </li>
              )
            })}
          </ul>
        </section>
      :
        <></>
      }
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
        </ul>
      </section> */}
    </Layout>
  );
}