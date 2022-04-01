import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { STATICProps } from '@/props';

import {
  usePalettesCtxDP,
  usePalettesCtxST,
} from '@/common/contexts/PaletteListContext';

import NewPaletteForm from '@/common/layouts/NewPaletteForm';

const NewPalettePage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { palettes } = usePalettesCtxST();
  const dispatch = usePalettesCtxDP();

  const _savePalette = (newPalette: PaletteI) => {
    dispatch({ type: 'SAVE', payload: { newPalette } });
  };

  console.log(`PAGE: /palette/new`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>

      <NewPaletteForm palettes={palettes} savePalette={_savePalette} />
    </>
  );
};

export const getStaticProps = STATICProps.NEWPALETTEPAGE;
export default NewPalettePage;
