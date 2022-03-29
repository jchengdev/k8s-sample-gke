import HOMEPAGE from '@/props/static/home';
import PALETTEPAGE, { PALETTEID } from '@/props/static/palette/[id]';
import SINGLECOLORPALETTEPAGE, {
  PALETTEIDANDCOLORID,
} from '@/props/static/palette/[id]/[colorId]';

export const SSRProps = {
  // PALETTEPAGE: PALETTEPAGE,
} as const;

export const STATICProps = {
  HOMEPAGE: HOMEPAGE,
  PALETTEPAGE: PALETTEPAGE,
  SINGLECOLORPALETTEPAGE: SINGLECOLORPALETTEPAGE,
} as const;

export const STATICPaths = {
  PALETTEPAGE: PALETTEID,
  SINGLECOLORPALETTEPAGE: PALETTEIDANDCOLORID,
} as const;
