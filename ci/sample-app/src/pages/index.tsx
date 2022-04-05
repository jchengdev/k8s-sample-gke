import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { STATICProps } from '@/props';

import { useRouter } from 'next/router';
import { goTo } from '@/routes/helpers';

import {
  usePalettesCtxDP,
  usePalettesCtxST,
} from '@/common/contexts/PaletteListContext';

import PaletteList from '@/common/layouts/PaletteList';

const HomePage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { palettes } = usePalettesCtxST();
  const dispatch_palette = usePalettesCtxDP();

  const _deletePalette = (id: string) => {
    dispatch_palette({ type: 'DELETE', payload: { id } });
  };

  console.log(`ROUTER READY: `, router.isReady); // * client-side only
  console.log(`PAGE: /`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      <PaletteList
        palettes={palettes}
        goToPalette={id => goTo.PALETTE(router, id)}
        deletePalette={_deletePalette}
      />
    </>
  );
};

export const getStaticProps = STATICProps.HOMEPAGE;
export default HomePage;
