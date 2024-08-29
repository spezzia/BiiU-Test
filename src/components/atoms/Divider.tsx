interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return <div className={`h-[2px] bg-black w-full ${className}`} />;
}
