interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return <div className={`h-[2px] bg-[#000000] w-full ${className}`} />;
}
