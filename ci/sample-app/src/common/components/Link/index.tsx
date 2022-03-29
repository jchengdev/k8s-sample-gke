import { FunctionComponent } from 'react';
import Link from 'next/link';
import type { LinkProps } from 'next/link';

interface WrappedLinkProps extends LinkProps {}

const storybookIsOn = process.env.STORYBOOK_MODE;

const WrappedLink: FunctionComponent<WrappedLinkProps> = props => {
  return !storybookIsOn ? (
    <Link {...props}>{props.children}</Link>
  ) : (
    <Link {...props} href={props.href}>
      <a onClick={() => alert(`<a> link to: ${props.href}`)}>
        {props.children}
      </a>
    </Link>
  );
};

export default WrappedLink;
