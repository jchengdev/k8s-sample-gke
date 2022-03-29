import { FunctionComponent as ReactFC } from 'react';
import Link from 'next/link';
import type { LinkProps } from 'next/link';

interface WrappedLinkProps extends LinkProps {}

const storybookIsOn = process.env.STORYBOOK_MODE;

const WrappedLink: ReactFC<WrappedLinkProps> = props => {
  return !storybookIsOn ? (
    <Link {...props}>{props.children}</Link>
  ) : (
    <Link {...props} href={props.href}>
      <a
        onClick={e => {
          e.stopPropagation();
          alert(`<a> link to: ${props.href}`);
        }}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default WrappedLink;
