import type { NextPage, NextPageContext } from 'next';

interface Custom404Props {}

const Custom404: NextPage<Custom404Props> = () => {
  return <h1>404 - Page Not Found</h1>;
};

export async function getStaticProps(context: NextPageContext) {
  // TODO: fetch something at build time
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Custom404;
