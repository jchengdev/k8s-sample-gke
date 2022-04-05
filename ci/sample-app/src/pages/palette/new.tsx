import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { STATICProps } from '@/props';

import { useRouter } from 'next/router';
import { goTo } from '@/routes/helpers';

import {
  usePalettesCtxDP,
  usePalettesCtxST,
} from '@/common/contexts/PaletteListContext';

import NewPaletteForm from '@/common/layouts/NewPaletteForm';

const NewPalettePage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { palettes } = usePalettesCtxST();
  const dispatch_palette = usePalettesCtxDP();

  const _savePalette = (newPalette: PaletteI) => {
    dispatch_palette({ type: 'SAVE', payload: { newPalette } });
  };

  console.log(`PAGE: /palette/new`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      <NewPaletteForm
        palettes={palettes}
        savePalette={_savePalette}
        goToRoot={() => goTo.HOME(router)}
      />
    </>
  );
};

export const getStaticProps = STATICProps.NEWPALETTEPAGE;
export default NewPalettePage;
