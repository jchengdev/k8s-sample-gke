import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { STATICProps, STATICPaths } from '@/props';

import { usePalettesCtxST } from '@/common/contexts/PaletteListContext';
import {
  useColorFormatCtxDP,
  useColorFormatCtxST,
} from '@/common/contexts/ColorFormatContext';

import Palette from '@/common/layouts/Palette';

import Link from '@/common/components/Link';
import { ROOT } from '@/routes/helpers';

import { generatePalette } from '@/common/utils/color-helpers';
const PalettePage = ({
  paletteId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { palettes } = usePalettesCtxST();
  const { format } = useColorFormatCtxST();
  const dispatch_color = useColorFormatCtxDP();

  const _findPalette = (id: string) => {
    return palettes.find(p => p.id === id);
  };

  const currentPalette = _findPalette(paletteId);

  console.log(`PAGE: /palette/${paletteId}`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      {
        currentPalette ? (
          <Palette
            {...generatePalette(currentPalette)}
            format={format}
            changeFormat={newFormat =>
              dispatch_color({ type: 'CHANGE', payload: { newFormat } })
            }
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

export const getStaticProps = STATICProps.PALETTEPAGE;
export const getStaticPaths = STATICPaths.PALETTEPAGE;
export default PalettePage;
