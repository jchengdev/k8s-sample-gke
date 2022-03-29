import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { useLocalStorageState } from '@/common/hooks/useLocalStorage';

import Palette from '@/common/layouts/Palette';

import seedColors from '@/common/_seeds';
import { generatePalette } from '@/common/utils/color-helpers';

const PalettePage: NextPage = () => {
  const router = useRouter();
  const [palettes, setPalettes] = useLocalStorageState(
    'palettes',
    seedColors as PaletteI[]
  );

  const _findPalette = (id: string) => {
    return palettes.find(p => p.id === id) || palettes[palettes.length - 1];
  };

  console.log(`PAGE: /palette/${router.query.id}`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      <Palette {...generatePalette(_findPalette(router.query.id as string)!)} />
    </>
  );
};

export default PalettePage;
