import type { GetStaticProps, GetStaticPaths } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import seeds from '@/common/_seeds';

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface PalettePageProps {
  paletteId: string;
}

const asyncFn: GetStaticProps<PalettePageProps> = async ctx => {
  const { id } = ctx.params as IParams;
  // * in SSR localStorage isn't accessible, so in this app's case id
  // * needs to be verified in client-side after page hydration (and Context
  // * loaded)

  return {
    props: { paletteId: id },
    revalidate: 5, // * adding Incremental Static Regeneration just because user may create new palettes (localStorage updates)
  };
};

export default asyncFn;

const PALETTEID: GetStaticPaths<IParams> = async () => {
  const paths = seeds.map(palette => ({
    params: { id: palette.id },
  }));

  return {
    paths,
    fallback: 'blocking', // * `blocking` because of new paths created in NewPalettePage
  };
};

export { PALETTEID };
