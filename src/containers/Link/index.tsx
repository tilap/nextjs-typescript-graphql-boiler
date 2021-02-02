/* eslint-disable jsx-a11y/anchor-has-content */
import MuiLink from '@material-ui/core/Link';
import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
// eslint-disable-next-line no-use-before-define
import React from 'react';

type Props = Pick<LinkProps, 'as' | 'href'>;

const NextComposed = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { as, href, ...other } = props;

  return (
    <NextLink as={as} href={href}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});
interface CustomLinkProps extends LinkProps {
  activeClassName?: string;
  className?: string;
  innerRef?: any; // FIXME
  naked?: boolean;
  children?: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const { href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname || '/';
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return <NextComposed href={href} ref={innerRef} {...other} />;
  }

  return <MuiLink className={className} component={NextComposed} href={pathname} ref={innerRef} {...other} />;
};

export default React.forwardRef<HTMLButtonElement, CustomLinkProps>((props, ref) => (
  <CustomLink {...props} innerRef={ref} />
));
