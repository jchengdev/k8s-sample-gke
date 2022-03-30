import type { NextPage, NextPageContext } from 'next';

import Link from '@/common/components/Link';

interface Custom404Props {}

const Custom404: NextPage<Custom404Props> = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href={'/'}>
        <a>GO TO MAIN PAGE</a>
      </Link>
    </>
  );
};

export async function getStaticProps(ctx: NextPageContext) {
  // TODO: fetch something at build time
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Custom404;
