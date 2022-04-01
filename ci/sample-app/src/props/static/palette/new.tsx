import type { GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {}

interface NewPalettePageProps {}

const asyncFn: GetStaticProps<NewPalettePageProps> = async ctx => {
  // const {} = ctx.params as IParams;

  return { props: {} };
};

export default asyncFn;
