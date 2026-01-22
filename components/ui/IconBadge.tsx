import Icon from './Icon';

interface IconBadgeProps {
  iconName: string;
  size?: number;
  className?: string;
}

export default function IconBadge({ iconName, size = 24, className = '' }: IconBadgeProps) {
  return (
    <div 
      className={`
        flex items-center justify-center
        rounded-xl
        bg-[color-mix(in_srgb,var(--brand)_10%,transparent)]
        border border-[color-mix(in_srgb,var(--brand)_20%,transparent)]
        shadow-sm
        text-[var(--brand)]
        ${className}
      `}
      style={{ width: size * 2, height: size * 2 }}
    >
      <Icon name={iconName} size={size} />
    </div>
  );
}
