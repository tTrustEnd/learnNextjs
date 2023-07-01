"use client" 
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
export interface IAboutProps {
}

export default function About (props: IAboutProps) {
 const router = useRouter()
  return (
    <div>
      hello aboutss
      <Link href="/about">Link</Link>
      Dashboard
      <button type="button" onClick={() => {router.push('/about/gem')}}>router.push = gem</button>
    </div>
  );
}
