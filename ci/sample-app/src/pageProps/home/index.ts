import type { GetServerSideProps } from 'next';

interface HomePageProps {
  // posts: Post[];
  mood: string;
}

const asyncFn: GetServerSideProps<HomePageProps> = async ctx => {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { posts: data, mood: 'HAPPIEST' } };
};

export default asyncFn;
