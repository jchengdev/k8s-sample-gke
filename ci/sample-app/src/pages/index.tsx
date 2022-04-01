import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { STATICProps } from '@/props';

import { useRouter } from 'next/router';

import {
  usePalettesCtxDP,
  usePalettesCtxST,
} from '@/common/contexts/PaletteListContext';

import PaletteList from '@/common/layouts/PaletteList';

const HomePage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { palettes } = usePalettesCtxST();
  const dispatch = usePalettesCtxDP();

  const _deletePalette = (id: string) => {
    dispatch({ type: 'DELETE', payload: { id } });
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
        goToPalette={paletteUrl => {
          router.push(paletteUrl);
        }}
        deletePalette={_deletePalette}
      />
    </>
  );
};

export const getStaticProps = STATICProps.HOMEPAGE;
export default HomePage;
