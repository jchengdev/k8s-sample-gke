import type { NextPage, NextPageContext } from 'next';

interface Custom500Props {}

const Custom500: NextPage<Custom500Props> = () => {
  return <h1>500 - Server-side error occurred</h1>;
};

export async function getStaticProps(context: NextPageContext) {
  // TODO: fetch something at build time
  return {
    props: {},
  };
}

export default Custom500;
