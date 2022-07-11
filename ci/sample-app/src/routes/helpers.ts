import type { NextRouter } from 'next/router';

/**
 * ! This is meant to be just a helper, but if something changes in routing packages (e.g. 'next-routes' module)
 * ! or even some underlying Node/Next bug, then it's better to fallback to literal string paths
 * */

/**
 * Helper CONSTANT for all App's paths
 */
export const ROOT = {
  HOME: '/',
  // ERROR: '/error',
  // TERMSOFUSE: '/termsofuse',
  // PRIVACYPOLICY: '/privacy',
  // ABOUT: '/about',
  // LOGIN: 'authMode=login',
  // REGISTER: 'authMode=signup',
  // FORGOTPASSWORD: '/forgotpassword',
  // RESETPASSWORD: '/resetpassword',
  // USERS: '/users',
  // USER: (slug: string) => '/users/' + slug,
  // GROUP: '/groups',
  // NEWS: '/news',
  // BLOG: '/blog',
  // POST: (idNslug: string) => '/post/' + idNslug,
  // PROFILE: '/profile',
  // EDITPROFILE: '/editprofile',
  // CHANGEPASSWORD: '/changepassword',
  // REGISTERSUCCESS: '/registrationsuccess',
  // CONFIRMEMAIL: '/confirmEmail',
  // COMPLETEPROFILE: '/completeprofile',
  PALETTE: (slug: string) => `/palette/${slug}`,
  SINGLECOLORPALETTE: (paletteSlug: string, colorSlug: string) =>
    `/palette/${paletteSlug}/${colorSlug}`,
  NEWPALETTE: '/palette/new',
} as const;

/**
 * Helper CONSTANT for all App's internal navigation paths
 */
// ! There is space for more DRYness, instead of recovering `router` in all pages,
// ! and passing down to helper `goTo`, could create a useRoutingCustomHook (and
// ! move all helpers to that folder) and retrieve routing helpers with UI-less
// ! containers
export const goTo = {
  // TODO: needs to trigger HTTP -> HTTPS somehow

  HOME: (router: NextRouter) => router.push(ROOT.HOME),
  // ERROR: (router: NextRouter) => router.push(ROOT.ERROR),
  PALETTE: (router: NextRouter, slug: string) =>
    router.push(ROOT.PALETTE(slug)),
} as const;

/**
 * - Helper function to check `/basePath`s that require Authentication (without `_BeforeLogin` view)
 * - Defaults to `true` (and should trigger `goTo.LOGIN()`)
 */
export const isAuthRequired = (basePath: string, idNslug?: string): boolean => {
  switch (basePath) {
    case ROOT.HOME:
      return false;
    // case ROOT.ERROR:
    //   return false;
    // case ROOT.TERMSOFUSE:
    //   return false;
    // case ROOT.PRIVACYPOLICY:
    //   return false;
    // case ROOT.ABOUT:
    //   return false;
    // case ROOT.LOGIN:
    //   return false;
    // case ROOT.REGISTER:
    //   return false;
    // case ROOT.FORGOTPASSWORD:
    //   return false;
    // case ROOT.RESETPASSWORD:
    //   return false;
    // case ROOT.NEWS:
    //   return false;
    // case ROOT.BLOG:
    //   return false;
    // case ROOT.POST + '/' + idNslug:
    //   return false;
    // case ROOT.REGISTERSUCCESS:
    //   return false;
    // case ROOT.CONFIRMEMAIL:
    //   return false;
    default:
      return true;
  }
};

/**
 * Converts a value into :slug for URL routes
 * ! (not everything is id->string or number->string)
 * * incomplete function just for reference
 * TODO: needs more discussion on what to pass as arguments
 */
export const toSlug = (val: any /*whateverElseNeeded?: any*/): string => {
  val.replace(/\s+/g, '-').toLowerCase();
  return ROOT.HOME;
};
