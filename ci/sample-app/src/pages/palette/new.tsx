import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { STATICProps } from '@/props';

import { useRouter } from 'next/router';

import {
  usePalettesCtxDP,
  usePalettesCtxST,
} from '@/common/contexts/PaletteListContext';

import NewPaletteForm from '@/common/layouts/NewPaletteForm';

const NewPalettePage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
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

      <NewPaletteForm
        palettes={palettes}
        savePalette={_savePalette}
        goToRoot={() => router.push('/')}
      />
    </>
  );
};

export const getStaticProps = STATICProps.NEWPALETTEPAGE;
export default NewPalettePage;
