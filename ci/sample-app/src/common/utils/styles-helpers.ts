const sizes = {
  up(size: string) {
    const sizes = {
      xss: '320px',
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    } as { [key: string]: string };

    return `@media (min-width: ${sizes[size]})`;
  },
  only(size: string) {
    const sizes = {
      xss: ['320px', '479.98px'],
      xs: ['480px', '575.98px'],
      sm: ['576px', '767.98px'],
      md: ['768px', '991.98px'],
      lg: ['992px', '1199.98px'],
      xl: ['1200px', '1599.98px'],
    } as { [key: string]: [string, string] };

    return `@media (min-width: ${sizes[size]?.[0]}) and  (max-width: ${sizes[size]?.[1]})`;
  },
  down(size: string) {
    const sizes = {
      xss: '479.98px',
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1599.98px',
    } as { [key: string]: string };

    return `@media (max-width: ${sizes[size]})`;
  },
};

export { sizes };
