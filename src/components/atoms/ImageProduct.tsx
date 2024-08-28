import Image from "next/image";

interface ImageProductProps {
  url: string;
  alt: string;
  className?: string;
}

export default function ImageProduct({
  url,
  alt,
  className,
}: ImageProductProps) {
  return (
    <Image
      src={url}
      className={className}
      alt={alt}
      objectFit="contain"
      fill
    />
  );
}
