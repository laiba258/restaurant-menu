// ─────────────────────────────────────────────────────────────────────────────
// LOGO COMPONENT
// Displays the Hunger Heaven logo PNG.
// Replace src/assets/logo.png with your logo file to update it everywhere.
// ─────────────────────────────────────────────────────────────────────────────

import logoImg from '../assets/logo.png';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const heightMap = { sm: '40px', md: '64px', lg: '88px' };

export default function Logo({ size = 'md', className = '' }: Props) {
  return (
    <img
      src={logoImg}
      alt="Hunger Heaven"
      className={className}
      style={{
        height: heightMap[size],
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
}
