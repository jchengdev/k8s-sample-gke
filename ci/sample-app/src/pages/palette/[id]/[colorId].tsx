import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { useLocalStorageState } from '@/common/hooks/useLocalStorage';

import SingleColorPalette from '@/common/layouts/SingleColorPalette';

import seedColors from '@/common/_seeds';
import { generatePalette } from '@/common/utils/color-helpers';

const SingleColorPalettePage: NextPage = () => {
  const router = useRouter();
  const [palettes, setPalettes] = useLocalStorageState(
    'palettes',
    seedColors as PaletteI[]
  );

  const _findPalette = (id: string) => {
    return palettes.find(p => p.id === id) || palettes[palettes.length - 1];
  };
  console.log(router.query);
  console.log(`PAGE: /palette/${router.query.id}/${router.query.colorId}`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      <SingleColorPalette
        palette={generatePalette(_findPalette(router.query.id as string)!)}
        selectedColorId={router.query.colorId as string}
      />
    </>
  );
};

export default SingleColorPalettePage;
