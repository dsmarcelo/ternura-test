import clsx from 'clsx';
import Image from 'next/image';
import logo from 'public/icons/Ternura Logo.svg';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <Image src={logo} className={clsx(props.className)} alt={`${process.env.SITE_NAME} logo`} />
  );
}
