import type { LinkProps } from 'next/link';
import Link from 'next/link';

interface WrappedLinkProps extends LinkProps {}

const storybookIsOn = process.env.STORYBOOK_MODE;

const WrappedLink: React.FC<WrappedLinkProps> = props => {
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
