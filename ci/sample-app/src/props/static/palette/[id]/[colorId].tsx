import type { GetStaticProps, GetStaticPaths } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import seeds from '@/common/_seeds';

interface IParams extends ParsedUrlQuery {
  id: string;
  colorId: string;
}

interface SingleColorPalettePageProps {
  paletteId: string;
  colorId: string;
}

const asyncFn: GetStaticProps<SingleColorPalettePageProps> = async ctx => {
  const { id, colorId } = ctx.params as IParams;

  return {
    props: { paletteId: id, colorId },
    revalidate: 5, // * adding Incremental Static Regeneration just because user may create new palettes (localStorage updates)
  };
};

export default asyncFn;

const PALETTEIDANDCOLORID: GetStaticPaths<IParams> = async () => {
  const paths: { params: IParams }[] = [];
  for (const p of seeds) {
    p.colors.map(c => {
      paths.push({ params: { id: p.id, colorId: c.name } });
      return;
    });
  }

  return {
    paths,
    fallback: 'blocking', // * `blocking` because of new paths created in NewPalettePage
  };
};

export { PALETTEIDANDCOLORID };
