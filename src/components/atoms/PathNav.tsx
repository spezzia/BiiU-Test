'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PathNameProps {
  href: string;
  path: string;
}

export default function PathName({ href, path }: PathNameProps) {
  const pathName = usePathname();

  let pathClassName = 'font-outfit font-bold';
  if (pathName === href) {
    pathClassName += ' text-[#10B981]';
  } else {
    pathClassName += ' text-black';
  }

  return (
    <Link href={href}>
      <p className={pathClassName}>{path}</p>
    </Link>
  );
}
