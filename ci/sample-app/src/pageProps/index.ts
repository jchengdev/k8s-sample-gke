import HOMEPAGE from './home';
import POSTPAGE from './posts';

export const STATICProps = {} as const;

export const SSRProps = {
  HOMEPAGE: HOMEPAGE,
  POSTPAGE: POSTPAGE,
} as const;
