import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useLocalStorageState } from '@/common/hooks/useLocalStorage';

import PaletteList from '@/common/layouts/PaletteList';

import seedColors from '@/common/_seeds';

const HomePage: NextPage = () => {
  const router = useRouter();
  const [palettes, setPalettes] = useLocalStorageState(
    'palettes',
    seedColors as PaletteI[]
  );

  const _deletePalette = (id: string) => {
    setPalettes(palettes.filter(p => p.id !== id));
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
