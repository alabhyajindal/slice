import Head from 'next/head';
import data from '../data.json';
import BlogPost from '../components/BlogPost';

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto mt-10 p-4'>
      <Head>
        <title>slice engineering &#8211; Makers of slice</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='flex flex-col gap-8'>
        {data.map((post) => (
          <BlogPost key={post.id} title={post.title} link={post.link} />
        ))}
      </div>
    </div>
  );
}
