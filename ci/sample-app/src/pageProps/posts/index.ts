import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface PostPageProps {
  postId: number;
  comments: Comment[];
}

const asyncFn: GetServerSideProps<PostPageProps> = async ctx => {
  const postId = _handleId(ctx);
  // if (!postId) return { redirect: { destination: '/', permanent: false } };
  if (!postId) return { notFound: true };

  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { postId, comments: data } };
};

const _handleId = (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;
  // TODO: handle invalid ID
  return id as unknown as number;
};

export default asyncFn;
