type IconProps = {
  name: string;
  filled?: boolean;
  className?: string;
  size?: string;
};

export function Icon({ name, filled, className = "", size }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: filled
          ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
          : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize: size,
      }}
    >
      {name}
    </span>
  );
}
