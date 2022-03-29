import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

// import { useLocalStorageState } from '@/common/hooks/useLocalStorage';

import { usePalettesCtxST } from '@/common/contexts/PaletteListContext';

import Palette from '@/common/layouts/Palette';

import Link from '@/common/components/Link';

// import seedColors from '@/common/_seeds';
import { generatePalette } from '@/common/utils/color-helpers';

const PalettePage: NextPage = () => {
  const router = useRouter();
  // const [palettes, setPalettes] = useLocalStorageState(
  //   'palettes',
  //   seedColors as PaletteI[]
  // );
  const { palettes } = usePalettesCtxST();

  const _findPalette = (id: string) => {
    return palettes.find(p => p.id === id);
  };

  const currentPalette = _findPalette(router.query.id as string);

  console.log(`PAGE: /palette/${router.query.id}`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      {
        currentPalette ? (
          <Palette {...generatePalette(currentPalette)} />
        ) : (
          <>
            <span>INVALID route</span>
            <Link href={'/'}>GO TO MAIN PAGE</Link>
          </>
        )
        // TODO: improve existing route check (maybe with global error boundary, or imperative routing, or...)
      }
    </>
  );
};

export default PalettePage;
