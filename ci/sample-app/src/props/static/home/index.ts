import type { GetStaticProps } from 'next';

interface HomePageProps {
  mood: string;
}

const asyncFn: GetStaticProps<HomePageProps> = async ctx => {
  // Fetch in build time
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const data = await res.json();

  // Pass data to the page via props
  return { props: { mood: `IT'S WORKING` } };
};

export default asyncFn;
