const sizes = {
  // up() {},
  down(size: string) {
    const sizes = {
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
