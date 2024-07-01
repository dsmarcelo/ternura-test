import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({
  size,
  className
}: {
  size?: 'sm' | undefined;
  className?: string;
}) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center', {
        'h-[40px] w-[40px] rounded-xl': !size,
        'h-[30px] w-[30px] rounded-lg': size === 'sm'
      })}
    >
      <LogoIcon
        className={clsx(className, {
          'h-[16px] w-[16px]': !size,
          'h-[10px] w-[10px]': size === 'sm'
        })}
      />
    </div>
  );
}
