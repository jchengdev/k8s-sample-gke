import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { usePalettesCtxST } from '@/common/contexts/PaletteListContext';

import SingleColorPalette from '@/common/layouts/SingleColorPalette';

import Link from '@/common/components/Link';

import { generatePalette } from '@/common/utils/color-helpers';

const SingleColorPalettePage: NextPage = () => {
  const router = useRouter();
  const { palettes } = usePalettesCtxST();

  const _findPalette = (id: string) => {
    return palettes.find(p => p.id === id) || palettes[palettes.length - 1];
  };

  const currentPalette = _findPalette(router.query.id as string);
  const isValidColor =
    currentPalette?.colors.findIndex(
      c =>
        c.name.toLowerCase() === (router.query.colorId as string)?.toLowerCase()
    ) !== -1;
  console.log((router.query.colorId as string)?.toLowerCase());

  console.log(`PAGE: /palette/${router.query.id}/${router.query.colorId}`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      {
        currentPalette && isValidColor ? (
          <SingleColorPalette
            palette={generatePalette(currentPalette)}
            selectedColorId={router.query.colorId as string}
          />
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

export default SingleColorPalettePage;
