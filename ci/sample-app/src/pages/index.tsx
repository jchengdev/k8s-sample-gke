import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  usePalettesCtxDP,
  usePalettesCtxST,
} from '@/common/contexts/PaletteListContext';

import PaletteList from '@/common/layouts/PaletteList';
const HomePage: NextPage = () => {
  const router = useRouter();
  const { palettes } = usePalettesCtxST();
  const dispatch = usePalettesCtxDP();

  const _deletePalette = (id: string) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

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

export default HomePage;
