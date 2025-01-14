import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';

interface TabButtonProps {
  name: string;
  icon: ReactNode;
  active: boolean;
  type?: string;
  showOnSm?: boolean;
  onClick: () => void;
}

const TabButton: FC<TabButtonProps> = ({
  name,
  icon,
  active,
  type,
  showOnSm = false,
  onClick
}) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (type) {
          router.replace({ query: { ...router.query, type } }, undefined, {
            shallow: true
          });
        }
        onClick();
      }}
      className={clsx(
        { 'text-brand bg-brand-100 dark:bg-brand-300/20': active },
        'flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 sm:px-3 sm:py-1.5',
        'hover:bg-brand-100/80 dark:hover:bg-brand-300/30'
      )}
      data-testid={`tab-button-${name.toLowerCase()}`}
      aria-label={name}
    >
      {icon}
      <span className={clsx({ 'hidden sm:block': !showOnSm })}>{name}</span>
    </button>
  );
};

export default TabButton;
