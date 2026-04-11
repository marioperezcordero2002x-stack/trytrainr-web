type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`tr-text-eyebrow font-sans ${className}`.trim()}>
      {children}
    </p>
  );
}
