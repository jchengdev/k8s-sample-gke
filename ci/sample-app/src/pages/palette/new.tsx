import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

// import { useLocalStorageState } from '@/common/hooks/useLocalStorage';
import Link from '@/common/components/Link';

// import Palette from '@/common/layouts/Palette';

// import seedColors from '@/common/_seeds';
// import { generatePalette } from '@/common/utils/color-helpers';

const NewPalettePage: NextPage = () => {
  const router = useRouter();
  // const [palettes, setPalettes] = useLocalStorageState(
  //   'palettes',
  //   seedColors as PaletteI[]
  // );

  // const _findPalette = (id: string) => {
  //   return palettes.find(p => p.id === id) || palettes[palettes.length - 1];
  // };

  console.log(`PAGE: /palette/new`);
  return (
    <>
      <Head>
        <title>CI CD Sample - NextJS</title>
      </Head>
      TODO: NEW PALETTE
      {
        // !
        // TODO: add components
        `${JSON.stringify(router)}`
      }
      <Link href={'/'}>GO BACK</Link>
    </>
  );
};

export default NewPalettePage;
