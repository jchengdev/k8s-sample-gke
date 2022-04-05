import type { NextPage, NextPageContext } from 'next';

import Link from '@/common/components/Link';
import { ROOT } from '@/routes/helpers';

interface Custom404Props {}

const Custom404: NextPage<Custom404Props> = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href={ROOT.HOME}>
        <a>GO TO MAIN PAGE</a>
      </Link>
    </>
  );
};

export async function getStaticProps(ctx: NextPageContext) {
  // TODO: fetch something at build time
  return {
    props: {},
  };
}

export default Custom404;
