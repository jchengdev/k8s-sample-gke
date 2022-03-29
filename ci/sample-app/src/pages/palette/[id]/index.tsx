import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { usePalettesCtxST } from '@/common/contexts/PaletteListContext';

import Palette from '@/common/layouts/Palette';

import Link from '@/common/components/Link';

import { generatePalette } from '@/common/utils/color-helpers';

const PalettePage: NextPage = () => {
  const router = useRouter();
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
