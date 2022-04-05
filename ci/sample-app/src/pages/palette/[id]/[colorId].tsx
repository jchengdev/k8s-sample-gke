import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { STATICProps, STATICPaths } from '@/props';

import { usePalettesCtxST } from '@/common/contexts/PaletteListContext';

import SingleColorPalette from '@/common/layouts/SingleColorPalette';

import Link from '@/common/components/Link';
import { ROOT } from '@/routes/helpers';

import { generatePalette } from '@/common/utils/color-helpers';

const SingleColorPalettePage = ({
  paletteId,
  colorId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { palettes } = usePalettesCtxST();

  const _findPalette = (id: string) => {
    return palettes.find(p => p.id === id) || palettes[palettes.length - 1];
  };

  const currentPalette = _findPalette(paletteId);
  const isValidColor =
    currentPalette?.colors.findIndex(
      c => c.name.toLowerCase() === colorId.toLowerCase()
    ) !== -1;

  console.log(`PAGE: /palette/${paletteId}/${colorId}`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      {
        currentPalette && isValidColor ? (
          <SingleColorPalette
            palette={generatePalette(currentPalette)}
            selectedColorId={colorId}
          />
        ) : (
          <>
            <span>INVALID route</span>
            <Link href={ROOT.HOME}>GO TO MAIN PAGE</Link>
          </>
        )
        // TODO: improve existing route check (maybe with global error boundary, or imperative routing, or...)
      }
    </>
  );
};

export const getStaticProps = STATICProps.SINGLECOLORPALETTEPAGE;
export const getStaticPaths = STATICPaths.SINGLECOLORPALETTEPAGE;
export default SingleColorPalettePage;
