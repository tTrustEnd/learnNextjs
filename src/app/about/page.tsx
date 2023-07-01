'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import {GET} from '../item/route'
export interface IAboutProps {


}

const About = (props: IAboutProps) => {
  const handleGet = async() => {
    let res =  await GET()
    console.log(res)
    router.push('/about/gem')
  }
 const router = useRouter()
  return (
    <div>
      hello aboutss
      <Link href="/">Link</Link>
      Dashboard
      <button type="button" onClick={() => handleGet()}>router.push = gem</button>
    </div>
  );
}
export default About;
