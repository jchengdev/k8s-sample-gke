import HOMEPAGE from '@/props/static/home';
import PALETTEPAGE, { PALETTEID } from '@/props/static/palette/[id]';
import SINGLECOLORPALETTEPAGE, {
  PALETTEIDANDCOLORID,
} from '@/props/static/palette/[id]/[colorId]';
import NEWPALETTEPAGE from '@/props/static/palette/new';

export const SSRProps = {
  // PALETTEPAGE: PALETTEPAGE,
} as const;

export const STATICProps = {
  HOMEPAGE: HOMEPAGE,
  PALETTEPAGE: PALETTEPAGE,
  SINGLECOLORPALETTEPAGE: SINGLECOLORPALETTEPAGE,
  NEWPALETTEPAGE: NEWPALETTEPAGE,
} as const;

export const STATICPaths = {
  PALETTEPAGE: PALETTEID,
  SINGLECOLORPALETTEPAGE: PALETTEIDANDCOLORID,
} as const;
