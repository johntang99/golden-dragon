'use client';

interface IconProps {
  name: string;
  size?: number;
  variant?: 'solid' | 'outline';
  className?: string;
}

export default function Icon({ name, size = 20, variant = 'outline', className = '' }: IconProps) {
  // Use local SVG
  const svgPath = `/icons/${name}.svg`;
  
  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <img 
        src={svgPath}
        alt=""
        width={size}
        height={size}
        className="w-full h-full"
      />
    </div>
  );
}
