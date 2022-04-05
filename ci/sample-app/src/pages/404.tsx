import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { useRouter } from 'next/router';
import Link from '@/common/components/Link';
import { ROOT } from '@/routes/helpers';

const Custom404 = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  console.log(`ROUTER READY: `, router.isReady); // * client-side only
  console.log(`PAGE: 404`);
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href={ROOT.HOME}>
        <a>GO TO MAIN PAGE</a>
      </Link>
    </>
  );
};

interface Custom404Props {
  unusedProp: string;
}
export const getStaticProps: GetStaticProps<Custom404Props> = async ctx => {
  console.log(JSON.stringify(ctx));
  return {
    props: { unusedProp: 'NEVERMIND' },
  };
};

export default Custom404;
